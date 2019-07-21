var Data = [
    {
        taskID: 0,
        taskName: 'the First thing to do today',
        status: 'todo',
        count: 0,
    },
    {
        taskID: 1,
        taskName: 'the First thing to do today',
        status: 'doing',
        count: 3,
    },
    {
        taskID: 2,
        taskName: 'the First thing to do today',
        status: 'done',
        count: 5,
    },
];

// checkbox 效果
function init(){
    $('.e-checkWrap').click(function(){
        var checkboxStatus = $(this).find('input[type="checkbox"]:checked').val();
        if(checkboxStatus == 'on'){
            $(this).css('text-decoration', 'line-through');
            doneStatus(this);
        }else{
            $(this).css('text-decoration', 'none');
            todoStatus(this);    
        }
    });
}
init();

//showList;
showList(Data);
function showList(data) {
    var todo = document.querySelector('.p-todolist__task ul');
    var done = document.querySelector('.p-todolist__done ul');

    var todoData = [];
    var doneData = [];

    data.forEach(element => {
        if (element.status === 'todo' || element.status === 'doing') {
            todoData.push(element);
        } else {
            doneData.push(element);
        }
    });

    todo.innerHTML = renderTodoList(todoData);
    done.innerHTML = renderDoneList(doneData);
    init();
}

// 渲染待辦
function renderTodoList(data){
    var todoList = '';
    data.forEach(element => {
        todoList += '<li class="l-task h-d-flex h-justify-content-between h-align-items-center"><label class="e-checkWrap" data-num="'+element.taskID+'">'+element.taskName+'<input type="checkbox"><span class="e-mark e-checkboxmark"></span></label><span><i class="material-icons">play_circle_outline</i></span></li>';
    });
    return todoList;
}

// 渲染完成
function renderDoneList(data){
    var doneList = '';
    data.forEach(element => {
        let spanStructure = genTomatoSpan(element.count);
        doneList += '<li class="l-task h-d-flex h-justify-content-between h-align-items-center"><label class="e-checkWrap" data-num="'+element.taskID+'">'+element.taskName+'<input type="checkbox" checked="checked"><span class="e-mark e-checkboxmark"></span></label><p>' + spanStructure + '</p></li>';
    });
    return doneList; 
}

//產生番茄鐘個數
function genTomatoSpan(count) {
    var span = '';
    for (let index = 0; index < count; index++) {
        span += '<span class="l-tomato--done h-d-inline-block"></span> ';
    }
    return span;
}



// 改變data 的 status
function todoStatus(e){
    var listID = e.dataset.num;
    Data[listID].status = 'todo';
    showList(Data);
}
function doneStatus(e){
    var listID = e.dataset.num;
    Data[listID].status = 'done';
    showList(Data);
}



// accordin
$(".js-accordion__list").on("click", function () {
    if ($(this).hasClass('js-accordion__active')) {
        $(this).removeClass("js-accordion__active");
        $(this).siblings('.js-accordion__content').slideUp(300);
        $(".js-accordion__list i").empty().text("arrow_drop_up");
    } else {
        $(this).find("i").empty().text("arrow_drop_down");
        $(this).addClass("js-accordion__active");
        $(this).siblings('.js-accordion__content').slideDown(300);
    }
});

