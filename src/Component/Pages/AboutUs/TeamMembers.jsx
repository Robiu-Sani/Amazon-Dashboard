export default function TeamMembers() {
  const teamMembers = [
    {
      id: 1,
      name: "Shahiraj Shakil",
      position: "Co-founder",
      image:
        "https://i.ibb.co.com/crWW3m7/329353964-688649152946374-5535398694996373691-n.jpg",
    },
    {
      id: 2,
      name: "Md Parves",
      position: "Co-founder",
      image:
        "https://i.ibb.co.com/tB7WLbM/433095547-1448946406033693-1561747788793184406-n.jpg",
    },
    {
      id: 3,
      name: "Sobuz Ahamed ",
      position: "Co-founder",
      image:
        "https://i.ibb.co.com/CHDh9WX/460080300-3741191896196276-8832842269512131053-n.jpg",
    },
    {
      id: 4,
      name: "MD Hasibul Hasan Hasib ",
      position: "Co-founder",
      image: "https://i.ibb.co.com/8dRQ2tx/466867453-2297384857287941-3486516729246488251-n.jpg",
    },
    {
      id: 5,
      name: "Md Abdullah",
      position: "Co-founder",
      image:
        "https://randomuser.me/api/portraits/men/33.jpg",
    },

   
  ];

  return (
    <div
      className="w-full grid gap-3"
      style={{
        gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
      }}
    >
      {teamMembers.map((item, idx) => (
        <div
          key={idx}
          className="w-full min-h-[200px] shadow-md border relative rounded-md overflow-hidden flex justify-center items-start"
        >
          <img
            src={item.image}
            alt="team members"
            className="h-full min-w-full"
          />
          <div className="w-full absolute bottom-0 p-2 bg-[#000000a9] flex flex-col justify-center items-center">
            <h2 className="font-bold text-white text-xl">{item.name}</h2>
            <p className="text-white">{item.position}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
