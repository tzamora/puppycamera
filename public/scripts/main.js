var Box = React.createClass({

    render: function(){

        return (

            <div className="Box">
            </div>

        );
    }

});


var PageListBox = React.createClass({

    render: function(){

        var pageBoxes = this.props.children;

        var pageStyle = {
            width:'100%',
            height:'100%'
        };

        return (

            <div style={pageStyle} className="commentList">
                {pageBoxes}
            </div>
        );
    }

});

var PageBox = React.createClass({

    render: function(){

        var pageBoxStyle = {

            position:'absolute',
            width:'100%',
            height:'100%'


        };

        var data = this.props;


        return (

            <div className="pageBox" style={pageBoxStyle}>
                {this.props.children}
            </div>
        );

    }

});

var PuppyPageList = React.createClass({

    render: function(){

        var style = {

        };

        return (
            <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="home">.1..</div>
                <div role="tabpanel" className="tab-pane" id="profile">.2..</div>
                <div role="tabpanel" className="tab-pane" id="messages">.3..</div>
                <div role="tabpanel" className="tab-pane" id="settings">.4..</div>
            </div>
        );

    }

});

var MyContentBox11 = React.createClass({

    render: function(){

        var style = {

            position:'absolute',
            width:'100px',
            height:'100px'


        };

        return (

            <div className="myContentBox11" style={style}>
                caja 1
            </div>
        );

    }

});

var RootBox = React.createClass({

    render: function(){

        return (
            <div className="rootBox">
                <HeaderBox></HeaderBox>
                <PuppyPageList></PuppyPageList>
                {/*<CommentBox data={this.props.data} />
                <FooterBox></FooterBox>*/}
            </div>
        );

    }

});

// tutorial1.js
var HeaderBox = React.createClass({

    render: function() {
        return (
            <div className="headerBox">
                <div className="navbar navbar-fixed-top">
                    <div className="navbar-header pull-left">

                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>


                    </div>
                    <div className="navbar-header pull-right">
                        <button type="button" className="btn btn-default">Button @@@</button>
                        <button type="button" className="btn btn-default navbar-btn">Button 1</button>
                        <button type="button" className="btn btn-default navbar-btn">Button 2</button>
                    </div>
                </div>
            </div>
        );
    }

});

var FooterBox = React.createClass({

    render: function() {

        var fixedFooter = {

            position:'fixed',
            left:'0px',
            bottom:'0px',
            height:'30px',
            width:'100%',
            background:'#41C4AD'

        };

        return (
            <div className="FooterBox" style={fixedFooter}>
                <footer className="page-footer">

                    <div className="footer-copyright">
                        <div className="container">
                            © 2014 Copyright Text
                            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                        </div>
                    </div>
                </footer>
            </div>

        );
    }

});

var TabsBox = React.createClass({

    render: function() {
        return (

            <div className="row">
                <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s3"><a href="#test1">Test 1</a></li>
                        <li className="tab col s3"><a className="active" href="#test2">Test 2</a></li>
                        <li className="tab col s3"><a href="#test3">Test 3</a></li>
                        <li className="tab col s3"><a href="#test4">Test 4</a></li>
                    </ul>
                </div>
                <div id="test1" className="col s12">Test 1</div>
                <div id="test2" className="col s12">Test 2</div>
                <div id="test3" className="col s12">Test 3</div>
                <div id="test4" className="col s12">Test 4</div>
            </div>

        );
    }

});

// tutorial1.js
var CommentBox = React.createClass({

    render: function() {
        return (

            <div className="commentBox">
                <CommentList data={this.props.data} />
            </div>

        );
    }

});

var CommentList = React.createClass({

    render: function(){

        var daysCounterButton = {
            position: 'absolute',
            bottom:'10px',
            right:'10px'
        };

        var postImageStyle = {

            width:'100%'

        };

        var commentNodes = this.props.data.map(function(comment){

            var heartButtonStyle = {
                position: 'absolute',
                bottom:'10px',
                left:'10px',
                width:'35px',
                height:'35px',
                backgroundImage: 'url(images/solid-black-heart-md.png)',
                backgroundSize: '35px 35px'
            };

            return (

                <div className="row" >
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                Basic panel
                                <img style={postImageStyle} src={comment.imageURL} />
                                <a style={daysCounterButton} className="waves-effect waves-light btn m">{comment.daysAlone} dias</a>
                                <div style={heartButtonStyle} ></div>

                                <Comment author={comment.author}>
                                    {comment.text}
                                </Comment>
                            </div>
                        </div>
                    </div>
                </div>
            );

        });

        return (

            <div className="commentList container-fluid">
                {commentNodes}
            </div>

        );
    }

});

var CommentForm = React.createClass({

    render:function(){
        return (
            <div className="commentForm">
                comment form
            </div>
        );

    }

});

var converter = new Showdown.converter();

var Comment = React.createClass({

    render:function(){

        // vamos a hacer una logica antes de que este mae dispare la jugada!

        var rawMarkup = converter.makeHtml(this.props.children.toString());

        return(
            <div className="comment">
                <p className="commentAuthor">
                    El autor {this.props.author}
                </p>
                <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
            </div>
        );
    }

});

// tutorial8.js
var data = [
    {
        author: "Pete Hunt",
        text: "This is one comment",
        imageURL: "images/old-dog.jpg",
        daysAlone:"10"
    },
    {
        author: "chucha Hunt",
        text: "ok lo que estoy pensando ahora es un despiche",
        imageURL: "images/Angry-Ferret-Just-Cant-Handle-Life-Right-Now.gif",
        daysAlone:"3"
    },
    {
        author: "Jordan Walke",
        text: "This is *another* comment",
        imageURL: "images/puppy.jpg",
        daysAlone:"1"
    }
];

React.render(
    <div>
        <RootBox data={data} />
    </div>
    ,
    document.getElementById('content')
);