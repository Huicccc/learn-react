// function Item({name, isPacked}) {
//   if (isPacked) {
//     return <li className="item">
//       <del>{name}</del>
//     </li>;
//   }
//   return <li className="item"> {name} </li>
// }

function Item({name, isPacked}) {
  return (
      <li className="item">
        {
          isPacked ? (name) : (<del>{name}</del>)
        }
      </li>
  );
}

export default function PackingList() {
  return (
      <section>
        <h1>My Packing List</h1>
        <ul>
          <Item
              isPacked={false}
              name="Laptop"
          />
          <Item
              isPacked={true}
              name="Chargers"
          />
          <Item
              isPacked={true}
              name="Socks"
          />
        </ul>
      </section>
  );
}
