import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-poll",
  templateUrl: "./poll.component.html",
  styleUrls: ["./poll.component.css"]
})
export class PollComponent implements OnInit {
  teamAPoints = 10;
  teamBPoints = 10;
  constructor() {}

  ngOnInit() {}

  onTeamAClick() {
    // alert("Thanks for votings team A");
    this.teamAPoints += 10;
    document.getElementById("team-a").style.width = this.teamAPoints.toString();
  }

  onTeamBClick() {
    // alert("Thanks for votings team B");
    this.teamBPoints += 10;
  }

  onResetClick() {
    this.teamAPoints = 10;
    this.teamBPoints = 10;
  }

  getTeamAScore() {
    return this.teamAPoints + "px";
  }

  getTeamBScore() {
    return this.teamBPoints + "px";
  }
}
