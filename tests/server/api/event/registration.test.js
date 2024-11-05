import { extract } from "../../../../server/api/event/registration";

test("0 registered", () => {
  expect(
    extract({
      data: [],
      mid: 109700,
      groupFilters: [
        {
          Type: 0,
          Value: "",
          Values: null,
        },
      ],
      comments: {},
      LiveUpdateInterval: 10,
    }),
  ).toStrictEqual({ registered: 0 });
});

test("5 registered", () => {
  expect(
    extract({
      data: {
        "#1_Team 01": [["3", "L1 F1", "L2 F1", "Team 01"]],
        "#2_Team 02": [["4", "L1 F1", "L2 F2", "Team 02"]],
        "#3_Team 03": [["5", "L1 F1", "L2 F1", "Team 03"]],
        "#4_Test-cyshdhl01": [
          [
            "2",
            "TEST-VICRLOH01 John",
            "Test-cyoqnsu01 Test-jvloukb01",
            "Test-cyshdhl01",
          ],
        ],
        "#5_Test-jjcubfa01": [
          ["1", "TEST-RWTMEKB01 John", "2158 Test-vuwrazs01", "Test-jjcubfa01"],
        ],
      },
      mid: 109700,
      groupFilters: [
        {
          Type: 0,
          Value: "",
          Values: null,
        },
      ],
      comments: {},
      LiveUpdateInterval: 10,
    }),
  ).toStrictEqual({ registered: 5 });
});
