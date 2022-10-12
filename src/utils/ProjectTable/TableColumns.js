export default [
  {
    title: "Project",
    key: "name",
  },
  {
    title: "Date",
    key: "bid_due_date",
  },
  {
    title: "Location",
    key: "city",
  },
  {
    title: "Distance",
    key: "distance",
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
