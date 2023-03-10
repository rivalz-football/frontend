export type GoalFlip = {
  version: "0.1.0";
  name: "rivalz_goalflip";
  instructions: [
    {
      name: "initGame";
      accounts: [
        {
          name: "game";
          isMut: true;
          isSigner: true;
        },
        {
          name: "admin";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "play";
      accounts: [
        {
          name: "gameMatch";
          isMut: true;
          isSigner: true;
        },
        {
          name: "game";
          isMut: true;
          isSigner: false;
        },
        {
          name: "player";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "position";
          type: "string";
        },
        {
          name: "corner";
          type: "string";
        },
        {
          name: "betAmount";
          type: "u64";
        }
      ];
    },
    {
      name: "resultGameMatch";
      accounts: [
        {
          name: "game";
          isMut: true;
          isSigner: false;
        },
        {
          name: "gameMatch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "player";
          isMut: true;
          isSigner: false;
        },
        {
          name: "admin";
          isMut: true;
          isSigner: true;
        },
        {
          name: "recentBlockhashes";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: "gameMatch";
      type: {
        kind: "struct";
        fields: [
          {
            name: "game";
            type: "publicKey";
          },
          {
            name: "player";
            type: "publicKey";
          },
          {
            name: "won";
            type: "bool";
          },
          {
            name: "position";
            type: {
              defined: "Position";
            };
          },
          {
            name: "playerCorner";
            type: {
              defined: "Corner";
            };
          },
          {
            name: "betAmount";
            type: "u64";
          },
          {
            name: "commissionAmount";
            type: "u64";
          },
          {
            name: "wonAmount";
            type: "u64";
          },
          {
            name: "createdAt";
            type: "u64";
          },
          {
            name: "status";
            type: {
              defined: "GameMatchStatus";
            };
          }
        ];
      };
    },
    {
      name: "game";
      type: {
        kind: "struct";
        fields: [
          {
            name: "multiplier";
            type: "u16";
          },
          {
            name: "commissionRate";
            type: "u16";
          },
          {
            name: "createdAt";
            type: "u64";
          },
          {
            name: "lastPlayDate";
            type: "u64";
          },
          {
            name: "loseCount";
            type: "u64";
          },
          {
            name: "winCount";
            type: "u64";
          },
          {
            name: "totalVolume";
            type: "u64";
          },
          {
            name: "latestMatch";
            type: "publicKey";
          },
          {
            name: "name";
            type: "bytes";
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "Position";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Goalkeeper";
          },
          {
            name: "Forward";
          }
        ];
      };
    },
    {
      name: "Corner";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Left";
          },
          {
            name: "Right";
          }
        ];
      };
    },
    {
      name: "GameMatchStatus";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Pending";
          },
          {
            name: "Won";
          },
          {
            name: "Lost";
          }
        ];
      };
    }
  ];
  events: [
    {
      name: "ResultGameMatchEvent";
      fields: [
        {
          name: "game";
          type: "publicKey";
          index: false;
        },
        {
          name: "player";
          type: "publicKey";
          index: false;
        },
        {
          name: "won";
          type: "bool";
          index: false;
        },
        {
          name: "position";
          type: {
            defined: "Position";
          };
          index: false;
        },
        {
          name: "playerCorner";
          type: {
            defined: "Corner";
          };
          index: false;
        },
        {
          name: "betAmount";
          type: "u64";
          index: false;
        },
        {
          name: "commissionAmount";
          type: "u64";
          index: false;
        },
        {
          name: "wonAmount";
          type: "u64";
          index: false;
        }
      ];
    }
  ];
  errors: [
    {
      code: 6000;
      name: "PermissionDenied";
      msg: "Permission denied";
    },
    {
      code: 6001;
      name: "GameAlreadyCompleted";
      msg: "Game is already completed";
    },
    {
      code: 6002;
      name: "InvalidPosition";
      msg: "Invalid Position";
    },
    {
      code: 6003;
      name: "InvalidCorner";
      msg: "Invalid Corner";
    },
    {
      code: 6004;
      name: "NoEnoughFund";
      msg: "No Enough Fund";
    },
    {
      code: 6005;
      name: "GameMatchAlreadyFinished";
      msg: "Game Match Already Finished";
    },
    {
      code: 6006;
      name: "WrongPlayerToResult";
      msg: "Wrong Player To Result";
    }
  ];
};

export const IDL: GoalFlip = {
  version: "0.1.0",
  name: "rivalz_goalflip",
  instructions: [
    {
      name: "initGame",
      accounts: [
        {
          name: "game",
          isMut: true,
          isSigner: true,
        },
        {
          name: "admin",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "play",
      accounts: [
        {
          name: "gameMatch",
          isMut: true,
          isSigner: true,
        },
        {
          name: "game",
          isMut: true,
          isSigner: false,
        },
        {
          name: "player",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "position",
          type: "string",
        },
        {
          name: "corner",
          type: "string",
        },
        {
          name: "betAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "resultGameMatch",
      accounts: [
        {
          name: "game",
          isMut: true,
          isSigner: false,
        },
        {
          name: "gameMatch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "player",
          isMut: true,
          isSigner: false,
        },
        {
          name: "admin",
          isMut: true,
          isSigner: true,
        },
        {
          name: "recentBlockhashes",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "gameMatch",
      type: {
        kind: "struct",
        fields: [
          {
            name: "game",
            type: "publicKey",
          },
          {
            name: "player",
            type: "publicKey",
          },
          {
            name: "won",
            type: "bool",
          },
          {
            name: "position",
            type: {
              defined: "Position",
            },
          },
          {
            name: "playerCorner",
            type: {
              defined: "Corner",
            },
          },
          {
            name: "betAmount",
            type: "u64",
          },
          {
            name: "commissionAmount",
            type: "u64",
          },
          {
            name: "wonAmount",
            type: "u64",
          },
          {
            name: "createdAt",
            type: "u64",
          },
          {
            name: "status",
            type: {
              defined: "GameMatchStatus",
            },
          },
        ],
      },
    },
    {
      name: "game",
      type: {
        kind: "struct",
        fields: [
          {
            name: "multiplier",
            type: "u16",
          },
          {
            name: "commissionRate",
            type: "u16",
          },
          {
            name: "createdAt",
            type: "u64",
          },
          {
            name: "lastPlayDate",
            type: "u64",
          },
          {
            name: "loseCount",
            type: "u64",
          },
          {
            name: "winCount",
            type: "u64",
          },
          {
            name: "totalVolume",
            type: "u64",
          },
          {
            name: "latestMatch",
            type: "publicKey",
          },
          {
            name: "name",
            type: "bytes",
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "Position",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Goalkeeper",
          },
          {
            name: "Forward",
          },
        ],
      },
    },
    {
      name: "Corner",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Left",
          },
          {
            name: "Right",
          },
        ],
      },
    },
    {
      name: "GameMatchStatus",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Pending",
          },
          {
            name: "Won",
          },
          {
            name: "Lost",
          },
        ],
      },
    },
  ],
  events: [
    {
      name: "ResultGameMatchEvent",
      fields: [
        {
          name: "game",
          type: "publicKey",
          index: false,
        },
        {
          name: "player",
          type: "publicKey",
          index: false,
        },
        {
          name: "won",
          type: "bool",
          index: false,
        },
        {
          name: "position",
          type: {
            defined: "Position",
          },
          index: false,
        },
        {
          name: "playerCorner",
          type: {
            defined: "Corner",
          },
          index: false,
        },
        {
          name: "betAmount",
          type: "u64",
          index: false,
        },
        {
          name: "commissionAmount",
          type: "u64",
          index: false,
        },
        {
          name: "wonAmount",
          type: "u64",
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: "PermissionDenied",
      msg: "Permission denied",
    },
    {
      code: 6001,
      name: "GameAlreadyCompleted",
      msg: "Game is already completed",
    },
    {
      code: 6002,
      name: "InvalidPosition",
      msg: "Invalid Position",
    },
    {
      code: 6003,
      name: "InvalidCorner",
      msg: "Invalid Corner",
    },
    {
      code: 6004,
      name: "NoEnoughFund",
      msg: "No Enough Fund",
    },
    {
      code: 6005,
      name: "GameMatchAlreadyFinished",
      msg: "Game Match Already Finished",
    },
    {
      code: 6006,
      name: "WrongPlayerToResult",
      msg: "Wrong Player To Result",
    },
  ],
};
