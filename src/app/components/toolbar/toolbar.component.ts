import {Component, OnInit} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {PeopleTableComponent} from "../people-table";
import {DataSharingState} from "../../app.module";
import {Subscription} from "rxjs";


@Component({
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatDialogModule],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit{

  $subscription: Subscription;

  constructor(public dialog: MatDialog) {
    this.$subscription = DataSharingState.getAsyncData().subscribe((prop: boolean) => {console.log(prop)});
  }

    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
      this.dialog.open(PeopleTableComponent, {
        enterAnimationDuration,
        exitAnimationDuration,
      });
    }


  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.$subscription.unsubscribe();
  }
}
