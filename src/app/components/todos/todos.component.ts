import {Component, OnInit} from '@angular/core';

import {TodoService} from '../../services/todo.service';
import {TagService} from '../../services/tag.service';
import {Todo} from '../../models/todo';
import {Tag} from '../../models/tag';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    todos: Todo[] = [];
    allTags: Tag[] = [];

    constructor(private todoService: TodoService, private tagService: TagService) {}

    ngOnInit() {
        this.todoService.listTodos()
            .subscribe((data: any) => {
                console.log(data);
                this.todos = data.todos;
            });

        this.tagService.listTags()
            .subscribe((data: any) => {
                console.log(data);
                this.allTags = data.tags;
            });
    }

}
