import React,{Component} from 'react'
import PropTypes from 'prop-types'

class ListItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const {index,deleteItem} = this.props;
        deleteItem(index)
    }

    render(){
        const {content} = this.props;
        return (
            <div
                onClick={this.handleClick}
            >
                {content}
             </div>
        )
    }
}
ListItem.propTypes = {
    index: PropTypes.number,
    deleteItem:PropTypes.func
};
export default ListItem
