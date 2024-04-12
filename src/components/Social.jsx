export function Social({forContact=false}) {
  return (
    <>
      {/* Icons for media sites */}
      <div className={`social ${forContact?"social-contact":""}`}>
        <a href="#">
          <i className="fa fa-github "></i>
        </a>
        <a href="#">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-discord"></i>
        </a>
      </div>
    </>
  );
}
