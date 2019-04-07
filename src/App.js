import React, { Component,Fragment } from 'react'
import axios from 'axios'
import store from './store/index'
import { Input, Button} from 'antd'
import ListItem from './ListItem'
import "./static/css/common_px.css"
import "antd/dist/antd.css"

const Search = Input.Search;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        console.log(store.getState());
        this.changeInputValue = this.changeInputValue.bind(this);
        this.addList = this.addList.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    changeInputValue(e){
        const value = e.target.value ;
        this.setState(()=>{
            return {
                inputValue: value
            }
        })
    }

    addList(){
        this.setState((preState)=>{
            const newList = [...preState.list,preState.inputValue];
            return {
                inputValue: '',
                list: newList
            }
        })
    }

    deleteItem(ind){
        this.setState((preState)=>{
            const newList = [...preState.list,preState.inputValue];
            newList.splice(ind,1);
            return {
                list: newList
            }
        })
    }

    componentDidMount(){
        axios.get('./mock')
            .then(()=>{
                console.log('获取文件成功！')
            })
            .catch(()=>{
                console.log('获取文件失败！')
            })
    }

    render(){
        return (
            <Fragment>
                <Input
                    placeholder="请输入新增项目"
                    style={{width:400}}
                    className={"mg-10"}
                    onChange={this.changeInputValue}
                />
                <Button
                    className={"mgt-10"}
                    onClick={this.addList}
                >新增</Button>
                <div>
                    {
                        this.state.list.map((val,ind)=>{
                            return (
                                    <ListItem
                                        key={ind}
                                        content={val}
                                        index={ind}
                                        deleteItem={this.deleteItem}
                                    />
                                )
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

export default App;
