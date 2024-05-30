const categories = ["all", "react", "javascript", "static"];

export function Filter({ tab, onClickTab }) {
  return (
    <div className="filter-bar">
      <>
        {categories.map((cat) => (
          <FilterTap
            key={cat}
            category={cat}
            isSelected={tab === cat}
            onClickTab={onClickTab}
          />
        ))}
      </>
    </div>
  );
}
function FilterTap({ category, isSelected, onClickTab }) {
    function handleClick(e){
        e.preventDefault();
        onClickTab(e.target.value);
    }
  return (
    <button 
        className={`tab ${isSelected ? "selected" : ""}`} 
        value={category}
        onClick={handleClick}
        >
      {category}
    </button>
  );
}
