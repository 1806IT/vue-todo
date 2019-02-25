
let detail={
    template:'#del'
}
let app2=new Vue({
    el:'#app',
    components:{
        detail
    },
    data:{
        todos:[
            {isSelected:true,title:'睡觉',startDate:'2016.11.20',todoDetail:'晚上睡觉太冷',schedule:30},
            {isSelected:true,title:'重做todo',startDate:'2008.12.20',todoDetail:'已做完',schedule:100},
            {isSelected:true,title:'吃饭',startDate:'1918.10.20',todoDetail:'停了',schedule:90},
        ],
        content:'',
        flag:false,
        cur:'',
        hash:''
    },
    created(){
        this.todos=JSON.parse(localStorage.getItem('data2'))||this.todos
        this.hash=window.location.hash.slice(2)||'all'
        window.addEventListener('hashchange',()=>{
            // console.log('changed')
            // console.log(window.location.hash)//看这个window.location的属性，以后会用得上
            this.hash=window.location.hash.slice(2)
        },false)
    },
    watch:{
        todos:{
            handler(){
                localStorage.setItem('data2',JSON.stringify(this.todos))
            },deep:true
        }
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
        detail(todo){
            console.log('展示细节')
            this.flag=true
            console.log(todo)
        },
        close(){
            this.flag=false
        },
        remember(){
            this.cur=''
        }
    },
    computed:{
        count(){
            return this.todos.filter(item=>item.isSelected==false).length
        },
        filterToDos(){
            if(this.hash=='all') return this.todos
            if(this.hash=='finish') return this.todos.filter(item=>item.isSelected==true)
            if(this.hash=='unfinish') return this.todos.filter(item=>item.isSelected==false)
            else return this.todo
        }
    },
    directives:{
        focus(el,bindings){
            //console.log(bindings)
            if(bindings.value){
                el.focus()
            }
        }
    }
})