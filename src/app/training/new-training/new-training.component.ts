import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
    reps = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    rpes = [10, 9.5, 9, 8.5, 8, 7.5, 7, 6.5];
    liftTypes = ['Squat', 'Bench', 'Deadlift'];

    constructor() {}

    ngOnInit() {}
}
