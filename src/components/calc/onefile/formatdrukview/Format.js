import React from "react";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {updateFile, updateFileAction} from "../../../../actions/fileAction";
import { MDBInput } from 'mdb-react-ui-kit';
import orient from './orient.svg';

export const Format = () => {
    const thisFile = useSelector(state => state.files.thisFile);
    useSelector(state => state.files.allFiles);
    const dispatch = useDispatch();

    if(!thisFile.x){
        thisFile.x = 0
    }
    if(!thisFile.y){
        thisFile.y = 0
    }

    let buttons = [];
    if(thisFile.calc === "digital"){
        buttons = [
            { name: "A7", value: "A7" },
            { name: "A6", value: "A6" },
            { name: "A5", value: "A5" },
            { name: "A4", value: "A4" },
            { name: "A3", value: "A3" },
            { name: "Свій розмір", value: "custom" },
        ];
    } else if(thisFile.calc === "wide"){
        buttons = [
            { name: "A3", value: "A3" },
            { name: "Свій розмір", value: "custom" },
        ];
    } else if(thisFile.calc === "photo"){
        buttons = [
            { name: "A4", value: "A4" },
            { name: "A3", value: "A3" },
            { name: "Свій розмір", value: "custom" },
        ];
    }

    const setFormatValue = (value) => {
        dispatch(updateFileAction(thisFile, "format", "orient", null, value, null, null))
    }
    const setXValue = (value) => {
        dispatch(updateFileAction(thisFile, "x", "format", null, value, "custom", null))
    }
    const setYValue = (value) => {
        dispatch(updateFileAction(thisFile, "y", "format", null, value, "custom", null))
    }
    const setOrientValue = () => {
        if(thisFile.format === "custom"){
            dispatch(updateFileAction(thisFile, "orient", "x", "y", null, thisFile.y, thisFile.x))
        } else {
            dispatch(updateFileAction(thisFile, "orient", null, null, !thisFile.orient, null, null))

        }
    }

    return (
        <div className="formatContainer">
            <div className="displayTitle">Формат</div>
            <div className="d-flex justify-content-center formatButtons">
                {buttons.map((button) => (
                    <Button
                        key={button.value}
                        id={button.value}
                        value={button.value}
                        variant={'outline-light'}
                        className={thisFile.format === button.value ? 'btnm formatC fileActive' : 'btnm formatC'}
                        onClick={(e) => setFormatValue(e.currentTarget.value)}
                    >
                        {button.name}
                    </Button>
                ))}
            </div>

            <div className="btn-toolbar pt-1">
                <div className="input-group d-flex pt-2 align-items-center justify-content-center m-auto">
                    <MDBInput className="input-group-text gray inputs inputFormat" onChange={(e) => setXValue(e.currentTarget.value)} label='' id='typeNumber' type='number' value={thisFile.x} />
                    <span className="input-group-text gray inputFormat">мм</span>
                    <Button onClick={setOrientValue} className="gray inputFormatButton orientButton">
                        <img src={orient} alt="" className="mouseScroll"/>
                    </Button>
                    <MDBInput className="input-group-text gray inputs inputFormat" onChange={(e) => setYValue(e.currentTarget.value)} label='' id='typeNumber' type='number' value={thisFile.y} />
                    <span className="input-group-text gray inputFormat">мм</span>
                </div>
            </div>
        </div>
    );
};