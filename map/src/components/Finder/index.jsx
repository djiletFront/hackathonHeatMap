import React from 'react';
import './index.css';
import {Button} from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import {useForm} from "react-hook-form";
import {Cities} from "../../constants/city.const";
import {ProductType} from "../../constants/productType";
import {ProductSum} from "../../constants/productSum.const";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import {formDefaultValue} from "../../constants/formDefaultValue.const";
import CustomDatePicker from "./CustomDatePicker";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {filterLocationAndOrders} from "../../store/slices/filterSlice";
import Backdrop from "./Backdrop";
import ButtonClose from "./ButtonClose";
import {closeFinder} from "../../store/slices/finderSlice"

const Finder = () => {

    const {register, control, handleSubmit, reset, watch} = useForm();
    const {show} = useSelector(state => state.handleFinder);

    const dispatch = useDispatch()

    //for checkboxes
    const latecomer = watch("latecomer")

    //for calendars
    const [dateRange, setDateRange] = React.useState([new Date(), new Date()]);


    const resetForm = () => {
        reset(formDefaultValue)
        setDateRange([new Date(), new Date()])
    }


    const onSubmit = (data) => {
        let date = {
            start: moment(dateRange[0]).format("YYYY.MM.DD"),
            end: moment(dateRange[1]).format("YYYY.MM.DD")
        }
        data['date'] = date
        dispatch(filterLocationAndOrders(data))
    }

    let className = 'finder';
    if (show) {
        className += ' active';
    }

    return (
        <>
            <Backdrop show={show} />
            <div
                className={className}
                elevation={6}
                sx={{
                    borderRadius: 0
                }}
            >
                    <ButtonClose />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CustomSelect
                            control={control}
                            title="Город"
                            name="cityId"
                            defaultValue={1}
                            listData={Cities}
                        />
                        <CustomSelect
                            control={control}
                            title="Вид заказов"
                            name="status"
                            defaultValue="allTypes"
                            listData={ProductType}
                        />
                        <CustomCheckbox
                            register={register}
                            name="latecomer"
                            title="Опоздавшие заказы"
                            checked={latecomer}
                        />
                        <CustomSelect
                            control={control}
                            title="Сумма заказа"
                            name="sum"
                            defaultValue="allSum"
                            listData={ProductSum}
                        />
                        <CustomInput
                            control={control}
                            title="Поиск по промокоду"
                            name="promoCode"
                            defaultValue=""
                            placeholder="Все промокоды"
                        />
                        <CustomDatePicker
                            title="Период"
                            dateRange={dateRange}
                            setDateRange={setDateRange}
                        />
                        <Button
                            variant="outlined"
                            fullWidth sx={{mb: '15px'}}
                            onClick={resetForm}
                        >
                            Сбросить фильтры
                        </Button>
                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth
                            startIcon={<SearchIcon/>}
                            onClick={() => dispatch(closeFinder())}
                            sx={{mb: '35px'}}
                        >
                            Показать
                        </Button>
                    </form>
            </div>
        </>
    );
};

export default Finder;
