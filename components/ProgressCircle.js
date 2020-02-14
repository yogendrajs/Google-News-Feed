import React from 'react';
import { Progress } from 'antd';

export default function ProgressCircle() {
    return (
        <div className="loader">
            <Progress 
                type="circle" 
                width={50} 
                percent={Math.round((Math.random() * (Math.abs(9 - 1))) + 1) * 10} 
                format={() => ''} 
            />
        </div>
    )
}
