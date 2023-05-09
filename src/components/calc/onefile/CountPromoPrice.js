import React from "react";
import {MDBInput, MDBInputGroup} from "mdb-react-ui-kit";
import {useDispatch, useSelector} from "react-redux";
import {updateFileAction} from "../../../actions/fileAction";

export const CountPromoPrice = () => {
    const thisFile = useSelector(state => state.files.thisFile);
    const allFiles = useSelector(state => state.files.allFiles);
    const dispatch = useDispatch();

    const setCountValue = (value) => {
        dispatch(updateFileAction(thisFile, "count", null, null, value, null, null))
    }

    let sss = 0
    let listType = ""
    let dNone = "d-none"
    if(thisFile.calc === "digital"){
        dNone = ""
        if(thisFile.format !== "A4"){
            let xx1 = 310 / thisFile.x
            let yy1 = 440 / thisFile.y
            let gg1 = Math.floor(xx1)*Math.floor(yy1)
            xx1 = 440 / thisFile.x
            yy1 = 310 / thisFile.y
            let gg2 = Math.floor(xx1)*Math.floor(yy1)
            let forR = 0
            if(gg1 > gg2){
                forR = gg1
            } else {
                forR = gg2
            }
            sss = Math.ceil(thisFile.count*thisFile.countInFile / forR)
            listType = "A3"
        } else {
            sss = thisFile.count*thisFile.countInFile
            listType = "A4"
        }
    }
    return (
        <div className="d-flex">
            <div>
                <div className="displayTitle">Кількість</div>
                <MDBInput
                    className="input-group-text gray inputs inputCount"
                    onChange={(e) => setCountValue(e.currentTarget.value)}
                    label=''
                    id='typeNumber'
                    type='number'
                    min={1}
                    value={thisFile.count}
                />
            </div>
            <div>
                <div className="displayTitle">Аркущів у файлі</div>
                <MDBInput
                    className="input-group-text gray inputs inputCount"
                    label=''
                    id='typeNumber'
                    type='number'
                    disabled={true}
                    value={thisFile.countInFile}
                />
            </div>
            <div className={dNone}>
                <div className="displayTitle">Затрачено буде: {listType}</div>
                <MDBInput
                    className="input-group-text gray inputs inputCount"
                    label=''
                    id='typeNumber'
                    type='number'
                    disabled={true}
                    value={sss}
                />
            </div>
            <div>
                <div className="displayTitle">Готових аркушів</div>
                <MDBInput
                    className="input-group-text gray inputs inputCount"
                    label=''
                    id='typeNumber'
                    type='number'
                    disabled={true}
                    value={thisFile.countInFile*thisFile.count}
                />
            </div>
            <div>
                <div className="displayTitle">Ціна в грн.</div>
                <MDBInput
                    className="input-group-text gray inputs inputCount"
                    label=''
                    id='typeNumber'
                    type='number'
                    disabled={true}
                    value={thisFile.price}
                />
            </div>
        </div>
    )
}