import React from "react";
export class List extends React.Component {

    constructor(props) {
        super(props);

    }

    renderGifList() {
        const { gifs } = this.props;
        return (
            gifs.map((gif) => {
                return (
                    <li key={gif.id}>
                        <img src={gif.images.original.url} alt={gif.title} />
                        <p>{gif.title}</p>
                    </li>
                )
            })
        )
    }


    render() {
        return (
            <div>
                <ul className="gif-list">
                    {this.renderGifList()}
                </ul>
            </div>
        )
    }


}