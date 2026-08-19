import "./PageHeader.css";

function PageHeader({ eyebrow, title, titleAccent, description }) {
  return (
    <header className="page-header">
      <div className="page-header__eyebrow">
        <span className="eyebrow">{eyebrow}</span>
      </div>

      <div className="page-header__content">
        <h1 className="page-header__title">
          {title}

          {titleAccent && (
            <>
              <br />
              <span>{titleAccent}</span>
            </>
          )}
        </h1>

        {description && (
          <p className="page-header__description">{description}</p>
        )}
      </div>
    </header>
  );
}

export default PageHeader;
