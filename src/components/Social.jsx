/* eslint-disable react/prop-types */
const socialIcons = [
  {
    id: 1,
    link: "https://github.com/ahmad-kashkoush",
    img: "icons/github.svg",
    alt: "Github",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/ahmed-kashkoush-9658a9265/",
    img: "icons/linkedin.svg",
    alt: "Linkedin",
  },
  {
    id: 3,
    link: "https://wa.me/01000976038",
    img: "icons/whatsapp.svg",
    alt: "Whatsapp",
  },
  {
    id: 4,
    link: "https://t.me/AHMED_KASHKOUSH",
    img: "icons/telegram.svg",
    alt: "Telegram",
  },
];

export function Social({ forContact = false }) {
  return (
    <>
      {/* Icons for media sites */}
      <div className={`social ${forContact ? "social-contact" : ""}`}>
        {socialIcons.map((socialIcon) => {
          return (
            <a key={socialIcon.id} href={socialIcon.link} target="_blank">
              <img src={socialIcon.img} alt={socialIcon.alt} />
            </a>
          );
        })}
      </div>
    </>
  );
}
