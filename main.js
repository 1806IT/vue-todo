
let app2=new Vue({
    el:'#app',
    data:{
        todos:[
            {isSlected:false,title:'睡觉'},
            {isSlected:false,title:'吃饭'}
        ],
        Content:'',
        flag:true,
        cur:'',
        hash:''
     },
    created(){
      this.todos=JSON.parse(localStorage.getItem('data'))||this.todos
        // 监控hash变化，如果页面以及有hash了，重新刷新页面也要获取hash值
        this.hash=window.location.hash.slice(2)||'all'
        window.addEventListener('hashchange',()=>{
            console.log('hash has changed');
            console.log(window.location.hash);
            // 当hash变化，重新操作记录当数据
            this.hash=window.location.hash.slice(2)
        },false)
    },
    watch:{
        todos:{
            handler(){
                localStorage.setItem('data',JSON.stringify(this.todos))
            },deep:true
        }
    },
    directives:{
        focus(el,bindings){
            if(bindings.value){
                el.focus()//获取焦点
            }
        }
    },
    methods:{
        add(){
            console.log('enter');
            this.todos.push({isSlected:false,title:this.Content})
            this.Content=''
        },
        remove(todo){
            this.todos=this.todos.filter(item=>item!==todo)
        },
        remember(todo,index){
            this.cur=todo
        },
        cancel(){
            console.log('撤出');
            this.cur=''
        }
    },
    computed:{
        count(){
            // console.log('进入计算属性')
            let b=this.todos.filter(item=>item.isSlected==false).length
            return b
        },
        filterToDos(){
            if(this.hash==='all') return this.todos
            if(this.hash=='finish') return this.todos.filter(item=>item.isSlected===true)
            if(this.hash=='unfinish') return this.todos.filter(item=>item.isSlected===false)
            return this.todos
        }
    },
    components:{

    }
})