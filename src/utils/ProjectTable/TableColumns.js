export default [
  {
    type: "expand",
    width: 50,
    render: (h, { row: { city, name } }) => {
      return h("div", "Description:" + name + ",Location:" + city);
    },
  },
  {
    title: "VIP",
    slot: "unLocked",
    align: "center",
    width: 90,
  },
  {
    title: "Project",
    key: "name",
  },
  {
    title: "Bid Date",
    key: "bid_due_date",
    align: "center",
    render: function (h, params) {
      return h(
        "div",
        params.row.bid_due_date.replace(/T/, " ").substring(0, 10)
      );
    },
  },
  {
    title: "Status",
    key: "status",
    align: "center",
  },
  {
    title: "Location",
    key: "city",
    align: "center",
  },
  {
    title: "Distance",
    key: "distance",
    align: "center",
    render: (h, params) => {
      return h("span", params.row.distance + " miles");
    },
  },
  {
    title: "Action",
    slot: "action",
    width: 150,
    align: "center",
  },
];
