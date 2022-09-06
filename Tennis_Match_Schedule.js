let Tennisteam = {
    PlayersList: [
        {
            Player: "Player1",
            Id: "PLRT21",
            Name: "Daniil Medvedev",
            Rank: 5,
            NOM: 786
        },
        {
            Player: "Player2",
            Id: "PLRT22",
            Name: "Alexander Zverev",
            Rank: 2,
            NOM: 786
        },
        {
            Player: "Player3",
            Id: "PLRT23",
            Name: "Rafael Nadal",
            Rank: 6,
            NOM: 786
        },
        {
            Player: 'Player4',
            Id: "PLRT24",
            Name: "Carlos Alcaraz",
            Rank: 4,
            NOM: 786
        },
        {
            Player: "Player5",
            Id: "PLRT25",
            Name: "Stefanos Tsitsipas",
            Rank: 1,
            NOM: 786
        },
        {
            Player: "Player6",
            Id: "PLRT26",
            Name: "Novak Djokovic",
            Rank: 3,
            NOM: 786
        },
        {
            Player: "Player7",
            Id: "PLRT27",
            Name: "Casper Ruud",
            Rank: 7,
            NOM: 786
        },
        {
            Player: "Player8",
            Id: "PLRT28",
            Name: "Felix Auger-Aliassime",
            Rank: 8,
            NOM: 786
        },


    ]
}
console.table(Tennisteam.PlayersList)
let Players = []
Tennisteam.PlayersList.forEach(i => { Players.push(i.Player) });

SortByRank = Tennisteam.PlayersList.sort((a, b) => (a.Rank - b.Rank))  //sorting players according to rank

//To get First Matchs
function FirstMatchs() {
    let FirstMatchsSchedule = [];
    for (i = 0; i < SortByRank.length / 2; i++) {
        let FirstMatchsSchedules = {
            "firstPlayerID": SortByRank[i].Id,
            "firstPlayer": SortByRank[i].Name,
            "firstPlayerRank": SortByRank[i].Rank,
            "secondPlayerID": SortByRank[SortByRank.length - 1 - i].Id,
            "secondPlayer": SortByRank[SortByRank.length - 1 - i].Name,
            "secondPlayerRank": SortByRank[SortByRank.length - 1 - i].Rank
        };
        FirstMatchsSchedule.push(FirstMatchsSchedules);
    }

    return FirstMatchsSchedule;
}

//To get First Matchs Winners
function FirstMatchsWinners() {
    let Qualifier = [];
    let findLeaguesMatch = FirstMatchs()
    for (let i = 0; i < findLeaguesMatch.length; i++) {
        if (i % 2 == 0) {
            let Qualifiers = {
                "leagueMatchID": findLeaguesMatch[i].firstPlayerID,
                "leagueMatchWinner": findLeaguesMatch[i].firstPlayer,
                "leagueMatchWinnerRank": findLeaguesMatch[i].firstPlayerRank,
            };
            Qualifier.push(Qualifiers);
        } else {
            let Qualifiers = {
                "leagueMatchID": findLeaguesMatch[i].firstPlayerID,
                "leagueMatchWinner": findLeaguesMatch[i].firstPlayer,
                "leagueMatchWinnerRank": findLeaguesMatch[i].firstPlayerRank
            };
            Qualifier.push(Qualifiers);
        }
    }

    return Qualifier;
}

//To get First Matchs Winners Matches
function FirstMatchsWinnersMatches() {
    let QualifierSchedule = [];
    let FirstMatchsWinnerss = FirstMatchsWinners()
    for (i = 0; i < FirstMatchsWinnerss.length; i += 2) {
        let QualifierSchedules = {
            "firstPlayer": FirstMatchsWinnerss[i].leagueMatchWinner,
            "firstPlayerRank": FirstMatchsWinnerss[i].leagueMatchWinnerRank,
            "secondPlayer": FirstMatchsWinnerss[1 + i].leagueMatchWinner,
            "secondPlayerRank": FirstMatchsWinnerss[1 + i].leagueMatchWinnerRank
        };
        QualifierSchedule.push(QualifierSchedules);
    }

    return QualifierSchedule;
}

//To get Second Matchs
function SecondMatchs() {
    let semiFinalist = []
    let FirstMatchsWinnersMatch = FirstMatchsWinnersMatches()
    for (let i = 0; i < FirstMatchsWinnersMatch.length; i++) {
        if (i % 2 == 0) {
            let semiFinalists = {
                "leagueMatchWinner": FirstMatchsWinnersMatch[i].firstPlayer,
                "leagueMatchWinnerRank": FirstMatchsWinnersMatch[i].firstPlayerRank
            };
            semiFinalist.push(semiFinalists);
        } else {
            let semiFinalists = {
                "leagueMatchWinner": FirstMatchsWinnersMatch[i].firstPlayer,
                "leagueMatchWinnerRank": FirstMatchsWinnersMatch[i].firstPlayerRank
            };
            semiFinalist.push(semiFinalists);
        }
    }
    return semiFinalist;
}

//To get Second Matchs Winners
function SecondMatchsWinners() {
    let SemiFinalSchedule = [];
    let semiFinalist = SecondMatchs()
    for (i = 0; i < semiFinalist.length; i += 2) {
        let SemiFinalSchedules = {
            "firstPlayer": semiFinalist[i].leagueMatchWinner,
            "firstPlayerRank": semiFinalist[i].leagueMatchWinnerRank,
            "secondPlayer": semiFinalist[1 + i].leagueMatchWinner,
            "secondPlayerRank": semiFinalist[1 + i].leagueMatchWinnerRank
        };
        SemiFinalSchedule.push(SemiFinalSchedules);
    }
    return SemiFinalSchedule;
}

//To get Final Match Players
function FinalMatchPlayers() {
    let Finalist = []
    let findSemiFinalMatch = SecondMatchsWinners()
    for (let i = 0; i < findSemiFinalMatch.length; i++) {
        if (i % 2 == 0) {
            let Finalists = {
                "leagueMatchWinner": findSemiFinalMatch[i].firstPlayer,
                "leagueMatchWinnerRank": findSemiFinalMatch[i].firstPlayerRank
            };
            Finalist.push(Finalists);
        } else {
            let Finalists = {
                "leagueMatchWinner": findSemiFinalMatch[i].firstPlayer,
                "leagueMatchWinnerRank": findSemiFinalMatch[i].firstPlayerRank
            };
            Finalist.push(Finalists);
        }
    }
    return Finalist;
} FinalMatchPlayers()

//To get Final Match
function FinalMatch() {
    let finalSchedule = [];
    let FinalMatchPlayerss = FinalMatchPlayers()
    for (i = 0; i < FinalMatchPlayerss.length; i += 2) {
        let finalSchedules = {
            "firstPlayer": FinalMatchPlayerss[i].leagueMatchWinner,
            "firstPlayerRank": FinalMatchPlayerss[i].leagueMatchWinnerRank,
            "secondPlayer": FinalMatchPlayerss[1 + i].leagueMatchWinner,
            "secondPlayerRank": FinalMatchPlayerss[1 + i].leagueMatchWinnerRank
        };
        finalSchedule.push(finalSchedules);
    }
    return finalSchedule;
}

//To get Total Match 
function TotalMatchSchedule() {
    if (SortByRank.length == 16) {
        let allMatch = {
            "LEAGUES": FirstMatchs(),
            "QUALIFIER": FirstMatchsWinnersMatches(),
            "SEMIFINAL": SecondMatchsWinners(),
            "FINAL": FinalMatch()
        }
        console.log(allMatch);
    } else if (SortByRank.length == 8) {
        let allMatch = {
            "LEAGUES": FirstMatchs(),
            "SEMIFINAL": FirstMatchsWinnersMatches(),
            "FINAL": SecondMatchsWinners(),
        }
        console.log(allMatch);
    } else if (SortByRank.length == 4) {
        let allMatch = {
            "LEAGUES": FirstMatchs(),
            "FINAL": FirstMatchsWinnersMatches(),
        }
        console.log(allMatch);
    }
} TotalMatchSchedule(Tennisteam.PlayersList)