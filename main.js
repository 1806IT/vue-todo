
let app2=new Vue({
    el:'#app',
    data:{
        todos:[
            {isSelected:true,title:'睡觉'},
            {isSelected:true,title:'重做todo'},
            {isSelected:true,title:'吃饭'},
        ],
        content:'',
        flag:true,
        cur:''
    },
    created(){

    },
    methods:{
        remove(todo){
            this.todos=this.todos.filter(item=>item!==todo)
        },
        add(){
            console.log('enter add new test');
            this.todos.push({isSelected:false,title:this.content})
            this.content=''
        },
        change(todo ){
            this.cur=todo
        },
        detail(){
            console.log('展示细节')
        },
        remember(){
            this.cur=''
        }
    },
    directives:{
        focus(el,bindings){
            console.log(bindings)
            if(bindings.value){
                el.focus()
            }
        }
    }
})