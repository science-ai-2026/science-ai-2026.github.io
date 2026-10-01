"""Randomly assign accepted papers to the two poster sessions.

Writes `posterSession` (1 or 2) into src/data/acceptedPapers.json and a CSV
(paper title, OpenReview ID, poster session) to assets/poster_sessions.csv.

Usage: python3 scripts/assign_poster_sessions.py [--force]
"""

import argparse
import csv
import json
import random
from pathlib import Path
from urllib.parse import parse_qs, urlparse

ROOT = Path(__file__).resolve().parent.parent
PAPERS_PATH = ROOT / 'src' / 'data' / 'acceptedPapers.json'
CSV_PATH = ROOT / 'assets' / 'poster_sessions.csv'
SEED = 2026
SESSION_LABELS = {1: 'Poster Session I', 2: 'Poster Session II'}


def openreview_id(forum_url):
    return parse_qs(urlparse(forum_url).query)['id'][0]


def assign(papers):
    rng = random.Random(SEED)
    # Shuffle orals and posters separately, then alternate sessions over the
    # concatenated list so both totals and orals are split evenly.
    orals = [p for p in papers if p['presentation'] == 'Oral']
    posters = [p for p in papers if p['presentation'] != 'Oral']
    rng.shuffle(orals)
    rng.shuffle(posters)
    for i, paper in enumerate(orals + posters):
        paper['posterSession'] = 1 if i % 2 == 0 else 2


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--force', action='store_true', help='reassign even if sessions already exist')
    args = parser.parse_args()

    papers = json.loads(PAPERS_PATH.read_text())
    if any('posterSession' in p for p in papers) and not args.force:
        print('Sessions already assigned; keeping them (use --force to reshuffle).')
    else:
        assign(papers)
        PAPERS_PATH.write_text(json.dumps(papers, indent=4, ensure_ascii=False) + '\n')

    CSV_PATH.parent.mkdir(exist_ok=True)
    rows = sorted(papers, key=lambda p: (p['posterSession'], p['title'].lower()))
    with CSV_PATH.open('w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['Paper Title', 'OpenReview ID', 'Poster Session'])
        for p in rows:
            writer.writerow([p['title'], openreview_id(p['forum']), SESSION_LABELS[p['posterSession']]])

    for session, label in SESSION_LABELS.items():
        in_session = [p for p in papers if p['posterSession'] == session]
        n_oral = sum(p['presentation'] == 'Oral' for p in in_session)
        print(f'{label}: {len(in_session)} papers ({n_oral} oral)')
    print(f'Wrote {CSV_PATH.relative_to(ROOT)}')


if __name__ == '__main__':
    main()
