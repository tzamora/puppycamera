/**
 * Created by antonio on 3/11/15.
 */
var Comment = React.createClass({

  render:function(){

    // vamos a hacer una logica antes de que este mae dispare la jugada!

    var rawMarkup = converter.makeHtml(this.props.children.toString());

    return(
      <div className="comment">
        <h2 className="commentAuthor">
                        {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }

});

// tutorial8.js
var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "chucha Hunt", text: "sfwww"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

React.render(
  <div>
    <CommentBox data={data} />
  </div>
  ,
  document.getElementById('content')
);
