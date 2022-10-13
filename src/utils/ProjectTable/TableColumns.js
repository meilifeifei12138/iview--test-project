export default [
  {
    title: "VIP",
    slot: "unLocked",
    align: "center",
    width: 90,
    // render: (h, params) => {
    //   if (params.row.is_unlocked) {
    //     return h(
    //       "Tooltip",
    //       {
    //         props: {
    //           placement: "bottom",
    //           content: "Locked",
    //         },
    //       }
    //       [
    //         h("Button", [
    //           h("font-awesome-icon", {
    //             props: {
    //               icon: "fa-solid fa-lock",
    //             },
    //             on: {
    //               click: () => {
    //                 console.log("show subscription dialog");
    //               },
    //             },
    //           }),
    //         ]),
    //       ]
    //     );
    //   } else {
    //     return h("span");
    //   }
    // },
  },
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
