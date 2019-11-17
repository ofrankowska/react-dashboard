import React, { Component } from 'react';
import SortableQuoteList from './SortableQuoteList';
import Navigation from './Navigation';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    FavoriteQuotes: {

        backgroundColor: "#1D2636",
        minHeight: "100vh",
        paddingBottom: "12px",
        display: "flex",
        flexDirection: "column"
    },
    colorBoxes: {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gridGap: "24px",
        margin: "24px"
    },
    message: {
        color: "white",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "-64px",
    },
    heartBrokenIcon: {
        fontSize: "60px",
        marginBottom: 0
    },
}
class FavoriteQuotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDeleteDialog: false,
            deletingId: ""
        }
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    openDialog(id){
        this.setState({openDeleteDialog: true, deletingId: id})
    }
    closeDialog(){
        this.setState({openDeleteDialog: false, deletingId: ""})
    }
    handleDelete() {
        this.props.removeQuote(this.state.deletingId);
        this.closeDialog();
    }
    render() {
        const { favoriteQuotes, onSortEnd, history, classes } = this.props;
        const {openDeleteDialog} = this.state;
        const sortableQuoteList = (
            <SortableQuoteList
                axis="xy"
                distance={20}
                onSortEnd={onSortEnd}
                favoriteQuotes={favoriteQuotes}
                openDialog={this.openDialog}
            />
        )
        const message = (
            <div className={classes.message}>
                <p className={classes.heartBrokenIcon}><FontAwesomeIcon icon={faHeartBroken} /></p>

                <h1>It looks like you haven't added any quotes to favorites yet.</h1>

            </div>
        )
        return (
            <div className={classes.FavoriteQuotes}>
                <Navigation title="Favorite Quotes" history={history} />
                <div className="scrollableContainer"></div>
                {favoriteQuotes.length > 0 ? sortableQuoteList : message}

                <Dialog open={openDeleteDialog} aria-labelledby="delete-dialog-title" onClose={this.closeDialog}>
                    <DialogTitle id="delete-dialog-title">
                        Do you want to remove this quote from favorites?
                    </DialogTitle>
                    <List>
                        <ListItem button onClick={this.handleDelete}>
                            <ListItemAvatar>
                                <Avatar style={{ background: "hotpink", color: "black" }}><CheckIcon /></Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Delete" />
                        </ListItem>
                        <ListItem button onClick={this.closeDialog}>
                            <ListItemAvatar>
                                <Avatar style={{ background: "aquamarine", color: "black" }}><CloseIcon /></Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Cancel" />
                        </ListItem>
                    </List>
                </Dialog>

            </div>
        )
    }
}

export default withStyles(styles)(FavoriteQuotes);