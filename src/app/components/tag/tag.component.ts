import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

import {Tag} from '../../models/tag';

@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
    @Input() tag: Tag;

    @Output() removeTagEvent = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
    }

    removeTag(tagId: number) {
        this.removeTagEvent.emit(tagId);
    }

}
