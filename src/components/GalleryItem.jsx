import CardItem from "./CardItem";

const GalleryItem = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default GalleryItem;
