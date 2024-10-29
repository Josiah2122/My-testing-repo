import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ textAlign: "center", marginTop: "2rem" }}>
          Your List is Empty
        </p>
      )}
    </main>
  );
};

export default Content;
