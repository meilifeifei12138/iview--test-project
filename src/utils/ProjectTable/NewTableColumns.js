import Router from "@/router";
import RoutesInf from "@/utils/RoutesInf";
export default [
  {
    type: "selection",
    width: 60,
    align: "center",
  },
  {
    title: "公告日期",
    key: "announcementDate",
    align: "center",
    maxWidth: 120,
    render: function (h, params) {
      return h(
        "div",
        params.row.announcementDate.replace(/T/, " ").substring(0, 10)
      );
    },
    sortable: true,
  },
  {
    title: "名称",
    key: "title",
    render: function (h, params) {
      return h(
        "a",
        {
          on: {
            click: () => {
              Router.push({
                name: RoutesInf.projectDetailsPage.name,
                params: {
                  id: params.row.id,
                  projectDetails: JSON.stringify(params.row),
                },
              });
            },
          },
        },
        params.row.title
      );
    },
  },
  {
    title: "国家",
    key: "countryId",
    width: 80,
    align: "center",
  },
  {
    title: "性质",
    key: "nature",
    align: "center",
  },
  {
    title: "截止日期",
    key: "closingDate",
    sortable: true,
    render: function (h, params) {
      return h(
        "div",
        params.row.closingDate.replace(/T/, " ").substring(0, 10)
      );
    },
  },
  {
    title: " ",
    slot: "isCollected",
    width: 60,
    align: "center",
  },
];
