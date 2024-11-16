export default function TeamMembers() {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRC-vgBhM-Q-qXkzUpMffAcFzS4UvNZ_d9wg&s",
    },
    {
      id: 2,
      name: "Michael Williams",
      position: "Chief Technology Officer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiPICw0MvHj_wo8CMy5anGtsvBzqAJSQtDFw&s",
    },
    {
      id: 3,
      name: "Emily Brown",
      position: "Marketing Manager",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XWqlmON1G75BbuqhsDfkb6V7to9IbBtpG9HFE6QQJIy26u1YxHXCFLeL4bzAcGAkm1I&usqp=CAU",
    },
    {
      id: 4,
      name: "David Lee",
      position: "Product Designer",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
    },
    {
      id: 5,
      name: "Sophia Martinez",
      position: "Software Engineer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsURI357WLB7efA2-K-ZxmQTbkiJVPNV21ftf1UdjCbeTC2KT0uqcRbq30bxivDfAHRqs&usqp=CAU",
    },
    {
      id: 6,
      name: "James Anderson",
      position: "Data Scientist",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      id: 7,
      name: "Olivia Garcia",
      position: "Content Strategist",
      image: "https://countyjournal.org/27-04-2022-09-34-08-am-6989494.jpg",
    },
    {
      id: 8,
      name: "Ethan Martinez",
      position: "Sales Manager",
      image:
        "https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2021/03/team-4-min-uai-1339x1339.jpg",
    },
    {
      id: 9,
      name: "Isabella White",
      position: "Human Resources",
      image:
        "https://cust-east.iqcdn.net/iq_cb_schmitt/images/agents/3055055411/3055055411_001.20161221130222701.jpg",
    },
    {
      id: 10,
      name: "Liam Walker",
      position: "Finance Manager",
      image: "https://premier7s.my/app/uploads/2024/04/team-member-3.webp",
    },
    {
      id: 11,
      name: "Mia Thompson",
      position: "Customer Support Lead",
      image: "https://www.isc.org/images/team/ZadrogaPiotrek2023.jpg",
    },
    {
      id: 12,
      name: "Noah Harris",
      position: "Business Analyst",
      image:
        "https://i0.wp.com/www.leadengine-wp.com/wp-content/uploads/sites/37/2018/02/personal1.jpg?w=1240&ssl=1",
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
