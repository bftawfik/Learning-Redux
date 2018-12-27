import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

class Autocomplete extends Component {

    set value(newValue) {
        this.refs.searchTerm.value = newValue
    }

    get value() {
        return this.refs.searchTerm.value
    }

    render() {

        const { suggestions=[], onChange=f=>f, onClear=f=>f, fetching=false } = this.props

        return (
            <div className="autocomplete">

                <input ref="searchTerm"
                       type="text"
                       placeholder="mountain or resort..."
                       onChange={onChange}
                       onFocus={onChange}
                       onBlur={() => setTimeout(onClear, 250)}
                />

                <span>{(fetching) ? <FontAwesomeIcon icon={faDownload} /> : null }</span>

                <div className="suggestions">
                    {suggestions.map((item, i) =>
                        <p key={i} onClick={() => {
                            this.refs.searchTerm.value = item
                            onClear()
                        }}>{item}</p>
                    )}
                </div>

            </div>
        )
    }

}

export default Autocomplete
