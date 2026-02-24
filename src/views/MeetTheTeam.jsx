import arianaImage from "../assets/ariana.jpg";
import trishImage from "../assets/trish.jpg";
import taylorImage from "../assets/taylor.jpeg";

const featuredMembers = [
  { name: "Ariana", title: "Owner / Stylist", photo: arianaImage },
  { name: "Trish", title: "Stylist", photo: trishImage },
  { name: "Taylor", title: "Esthetician", photo: taylorImage },
];

const listedMembers = [
  { name: "Connor", title: "Stylist" },
  { name: "Dorothy", title: "Massage Therapist" },
];

function MeetTheTeam() {
  return (
    <section className="team-page" aria-label="Meet the Team">
      <h1 className="team-page__title visually-hidden">Meet the Team</h1>
      <div className="team-grid">
        {featuredMembers.map((member) => (
          <article key={member.name} className="team-card">
            <img
              src={member.photo}
              alt={`${member.name} profile`}
              className="team-card__photo"
            />
            <h2 className="team-card__name">{member.name}</h2>
            <p className="team-card__role">{member.title}</p>
          </article>
        ))}
      </div>

      <div className="team-list" aria-label="Additional team members">
        {listedMembers.map((member) => (
          <article key={member.name} className="team-list__item">
            <h2 className="team-list__name">{member.name}</h2>
            <p className="team-list__role">{member.title}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MeetTheTeam;
