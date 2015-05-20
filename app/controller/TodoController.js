Ext.define('todosencha.controller.TodoController', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'all': 'showAll',
            'active': 'showActive',
            'completed': 'showCompleted'
        },

        refs: {
            mainArea: '#main_area',
            newTodoInput: '#newTodoInput',
            todoList: 'main #todoList',
            btnShowAllTodos: 'button[action=showAllTodos]',
            btnShowActiveTodos: 'button[action=showActiveTodos]',
            btnShowCompletedTodos: 'button[action=showCompletedTodos]',
            btnClearCompletedTodos: 'button[action=clearCompletedTodos]',
            cbxToggleAll: 'button[action=doToggleAll]'


        },

        control: {
            completeTodo: {
                tap: 'setCompleted'
            },
            addTodoButton: {
                tap: 'addToStorage'
            },
            todoList: {
                itemsingletap: 'todoClickPos',
                itemdoubletap: 'editTodo'
            },

            newTodoInput: {
                keyup: function (field, e) {
                    if (e.event.keyCode === 13) {
                        this.addToStorage();
                        this.clearInput();

                    }
                }
            },
            mainArea:  {
                onShowOrHide: 'showOrHide'
            },
            btnShowAllTodos: {
                tap: 'tapShowAll'
            },
            btnShowActiveTodos: {
                tap: 'tapShowActive'
            },
            btnShowCompletedTodos: {
                tap: 'tapShowCompleted'
            },
            btnClearCompletedTodos: {
                tap: 'clearCompletedTodos'
            },
            cbxToggleAll: {
                tap: 'setAllCompleted'
            }
        }

    },

    tapShowAll: function () {
        this.redirectTo('all');
    },

    tapShowActive: function () {
        this.redirectTo('active');
    },

    tapShowCompleted: function () {
        this.redirectTo('completed');
    },

    showAll: function () {
        var todoStore = Ext.getStore('TodoStore');
        var view = Ext.Viewport.getActiveItem();
        var todolist = view.down('#todoList');
        var buttonAll = view.down('#allTodo');
        var buttonActive = view.down('#activeTodo');
        var buttonComplete = view.down('#completedTodo');
        buttonAll.setHtml('<li><a class="selected" href="#/">All</a></li>');
        buttonActive.setHtml('<li><a class="" href="#/">Active</a></li>');
        buttonComplete.setHtml('<li><a class="" href="#/">Completed</a></li>');
        todoStore.setFilters([]);
        todoStore.load();
        todolist.refresh();

        this.countTodosLeft();

    },
    showActive: function () {
        var todoStore = Ext.getStore('TodoStore');
        var view = Ext.Viewport.getActiveItem();
        var todolist = view.down('#todoList');
        var buttonAll = view.down('#allTodo');
        var buttonActive = view.down('#activeTodo');
        var buttonComplete = view.down('#completedTodo');
        buttonAll.setHtml('<li><a class="" href="#/">All</a></li>');
        buttonActive.setHtml('<li><a class="selected" href="#/">Active</a></li>');
        buttonComplete.setHtml('<li><a class="" href="#/">Completed</a></li>');
        todoStore.setFilters([{
            filterFn: function (item) {
                return !item.get('completed');
            }
        }]);
        todoStore.load();
        todolist.refresh();

        this.countTodosLeft();

    },
    showCompleted: function () {
        var todoStore = Ext.getStore('TodoStore');
        var view = Ext.Viewport.getActiveItem();
        var todolist = view.down('#todoList');
        var buttonAll = view.down('#allTodo');
        var buttonActive = view.down('#activeTodo');
        var buttonComplete = view.down('#completedTodo');
        buttonAll.setHtml('<li><a class="" href="#/">All</a></li>');
        buttonActive.setHtml('<li><a class="" href="#/">Active</a></li>');
        buttonComplete.setHtml('<li><a class="selected" href="#/">Completed</a></li>');
        todoStore.setFilters([{
            filterFn: function (item) {
                return item.get('completed');
            }
        }]);
        todoStore.load();
        todolist.refresh();

        this.countTodosLeft();

    },

    showOrHide: function () {
        var todoStore = Ext.getStore('TodoStore');
        todoStore.load();
        var view = Ext.Viewport.getActiveItem();
        var mainArea = view.down('#main_area');
        var footerArea = view.down('#todoFooterID');
        var todoStore_totalCount = todoStore._totalCount;
        if (todoStore._totalCount === 0) {
            mainArea.hide();
            footerArea.hide();
        } else {
            mainArea.show();
            footerArea.show();
        }
    },


    addToStorage: function () {
        var todoStore = Ext.getStore('TodoStore'),
            todoInput = this.getNewTodoInput().getValue();
        if (todoInput.trim() === '') {
            return;
        }
        todoStore.load();
        todoStore.add({
            title: todoInput,
            completed: false
        });
        todoStore.sync();
        this.showOrHide();
        this.countTodosLeft();


    },
    clearInput: function () {
        this.getNewTodoInput().setValue('');
    },
    destroyTodo: function (ctx, index, target, record, e, eOpts) {
        var todoStore = Ext.getStore('TodoStore');
        todoStore.remove(record);
        todoStore.sync();
        this.countTodosLeft();
        this.showOrHide();



    },
    editTodo: function (ctx, index, target, record, e, eOpts) {
        var todoStore = Ext.getStore('TodoStore');
        record.get('title');
        evt.getTarget('.edit').style('display: block');

    },

    todoClickPos: function (ctx, index, target, record, evt, eOpts) {
        if (evt.getTarget('.destroy')) {
            this.destroyTodo(ctx, index, target, record, evt, eOpts);
        } else if (evt.getTarget('.toggle')) {
            this.todoCheck(ctx, index, target, record, evt, eOpts)
        };

    },

    todoCheck: function (ctx, index, target, record, e, eOpts) {
        var todoStore = Ext.getStore('TodoStore');
        if (record.getData().completed) {
            record.set('completed', false);
        } else {
            record.set('completed', true);
        }
        todoStore.sync();
        this.countTodosLeft();

    },
    countTodosLeft: function () {
        var todoStore = Ext.getStore('TodoStore');
        var view = Ext.Viewport.getActiveItem();
        var label = view.down('#uncompletedTodos');
        var total = 0;
        todoStore.each(function (record) {
            var isCompleted = record.getData().completed;
            if (!isCompleted) {
                total++;
            }
        });
        text = (total === 1) ? 'item left' : 'items left';
        setLabelText = total + ' ' + text;
        label.setHtml(setLabelText);
        return total;
    },

    clearCompletedTodos: function () {
        var todoStore = Ext.getStore('TodoStore');
        todoStore.each(function (record) {
            var isCompleted = record.getData().completed;
            if (isCompleted) {
                todoStore.remove(record);
                todoStore.sync();

            }
        });
        this.showOrHide();

    },
    setAllCompleted: function () {
        var todoStore = Ext.getStore('TodoStore');
        var total = 0;
        todoStore.each(function (record) {
            var isCompleted = record.getData().completed;
            if (!isCompleted) {
                total++;
            }
        });
        if (total != 0) {
            todoStore.each(function (record) {
                record.set('completed', true);
                todoStore.sync();

            });
        } else {
            todoStore.each(function (record) {
                record.set('completed', false);
                todoStore.sync();
            });
        }
        this.countTodosLeft();


    },
    editTodo: function (ctx, index, target, record, e, eOpts) {
        console.log('editTodo is not implemented');

    },

    launch: function () {
        console.log('launch');
        this.showOrHide();
        this.countTodosLeft();
    }


});
