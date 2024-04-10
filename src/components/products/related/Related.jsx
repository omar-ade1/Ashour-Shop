import "./related.css";

const Related = () => {
  return (
    <div className="mt-5 flex items-center gap-5">
      <div className="title">
        <h4 className="font-bold text-lg">Related</h4>
      </div>

      <div className="selector flex flex-wrap gap-2">
        <div>
          <p className="related_selector">Free shipping</p>
        </div>
        <div>
          <p className="related_selector">Casual shirts</p>
        </div>
        <div>
          <p className="related_selector">jewellery</p>
        </div>
        <div>
          <p className="related_selector">hard drive</p>
        </div>
        <div>
          <p className="related_selector">women{"'"}s clothing</p>
        </div>
      </div>
    </div>
  );
};

export default Related;
