import reviewersData from '@/data/reviewers.json';

type Reviewer = {
  id: string;
  name: string;
  openreviewPage: string;
};

const reviewers = reviewersData as Reviewer[];
const getLastName = (name: string) => name.trim().split(/\s+/).at(-1) || name;
const sortedReviewers = [...reviewers].sort((a, b) => {
  const lastNameCompare = getLastName(a.name).localeCompare(getLastName(b.name));
  return lastNameCompare || a.name.localeCompare(b.name);
});

export default function Reviewers() {
  return (
    <section id="reviewers" className="section-padding bg-primary-50">
      <div className="section-container">
        <h2 className="section-heading">Reviewers</h2>
        <p className="section-lead">
          We thank the reviewers for their time and effort in reviewing for our workshop.
        </p>

        <div className="mt-10 rounded border border-neutral-200 bg-white p-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {sortedReviewers.map((reviewer) => (
              <a
                key={reviewer.id}
                href={reviewer.openreviewPage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-800"
              >
                {reviewer.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
