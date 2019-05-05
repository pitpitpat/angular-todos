import {Component, OnInit, Input} from '@angular/core';

import { Todo } from '../../models/todo';
import { Tag } from '../../models/tag';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    @Input() todo: Todo;
    @Input() allTags: Tag[];

    constructor() {}

    ngOnInit() {
        this.todo.summary = (this.todo.summary || '<no-summary>');
        this.todo.description = (this.todo.description || '<no-description>');
    }

    removeTag($event): void {
        const tagId = $event
        this.todo.tags = this.todo.tags.filter((tag) => {
            return tag.tag_id !== tagId;
        });
    }

}
