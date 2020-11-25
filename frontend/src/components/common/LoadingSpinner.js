import React, { useState } from "react";
import { css } from '@emotion/react';
import GridLoader from 'react-spinners/GridLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const LoadingSpinner = (props) => {

    const [isLoading, setIsLoading] = useState(props.isLoading);

    return (
        <div className='mt-5' style={ { height: '100%', width: '100%' } }>
            <GridLoader
                css={ override }
                size={ 20 }
                color={ "#4d2475" }
                loading={ isLoading }
            />
        </div>
    )
};

export default LoadingSpinner;