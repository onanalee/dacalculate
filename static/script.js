function convertLength(){
    let unitA = $('#lengthUnitA option:selected').val();
    let unitB = $('#lengthUnitB option:selected').val();

    if (unitA === '(nm) nanometer' && unitB === '(nm) nanometer') {
        let before = $('#lengthBefore').val();
        let after = before * 1
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nanometer' && unitB === '(μm) micrometer') {
        let before = $('#lengthBefore').val();
        let after = before * 0.001
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nanometer' && unitB === '(mm) millimeter') {
        let before = $('#lengthBefore').val();
        let after = before * 0.000001
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nanometer' && unitB === '(cm) centimeter') {
        let before = $('#lengthBefore').val();
        let after = before * 0.0000001
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nanometer' && unitB === '(m) meter') {
        let before = $('#lengthBefore').val();
        let after = before * 0.000000001
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nanometer' && unitB === '(km) kilometer') {
        let before = $('#lengthBefore').val();
        let after = before * 0.000000000001
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nanometer' && unitB === '(in) inch') {
        let before = $('#lengthBefore').val();
        let after = before * 0.00000003937007874
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nanometer' && unitB === '(ft) feet') {
        let before = $('#lengthBefore').val();
        let after = before * 0.000000003280839895;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nanometer' && unitB === '(yd) yard') {
        let before = $('#lengthBefore').val();
        let after = before * 0.000000001093613298;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nanometer' && unitB === '(mi) mile') {
        let before = $('#lengthBefore').val();
        let after = before * 0.0000000000006213688756;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nanometer' && unitB === '(nm) nautical mile') {
        let before = $('#lengthBefore').val();
        let after = before * 0.00000000000053996;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nanometer' && unitB === '(au) astronomical unit') {
        let before = $('#lengthBefore').val();
        let after = before * 149597870700000000000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nanometer' && unitB === 'light-year') {
        let before = $('#lengthBefore').val();
        let after = before * 9460730472580800000000000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(μm) micrometer' && unitB === '(nm) nanometer') {
        let before = $('#lengthBefore').val();
        let after = before * 1000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(μm) micrometer' && unitB === '(μm) micrometer') {
        let before = $('#lengthBefore').val();
        let after = before * 1;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(μm) micrometer' && unitB === '(mm) millimeter') {
        let before = $('#lengthBefore').val();
        let after = before * 0.001;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(μm) micrometer' && unitB === '(cm) centimeter') {
        let before = $('#lengthBefore').val();
        let after = before * 0.0001;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(μm) micrometer' && unitB === '(m) meter') {
        let before = $('#lengthBefore').val();
        let after = before * 0.000001;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(μm) micrometer' && unitB === '(km) kilometer') {
        let before = $('#lengthBefore').val();
        let after = before * 0.000000001;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(μm) micrometer' && unitB === '(in) inch') {
        let before = $('#lengthBefore').val();
        let after = before * 0.00003937007874
        $('#lengthAfter').val(after);
    }
    if (unitA === '(μm) micrometer' && unitB === '(ft) feet') {
        let before = $('#lengthBefore').val();
        let after = before * 0.000003280839895;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(μm) micrometer' && unitB === '(yd) yard') {
        let before = $('#lengthBefore').val();
        let after = before * 0.000001093613298;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(μm) micrometer' && unitB === '(mi) mile') {
        let before = $('#lengthBefore').val();
        let after = before * 0.0000000006213688756;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(μm) micrometer' && unitB === '(nm) nautical mile') {
        let before = $('#lengthBefore').val();
        let after = before * 0.00000000053996;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(μm) micrometer' && unitB === '(au) astronomical unit') {
        let before = $('#lengthBefore').val();
        let after = before * 149597870700000000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(μm) micrometer' && unitB === 'light-year') {
        let before = $('#lengthBefore').val();
        let after = before * 9460730472580800000000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mm) millimeter' && unitB === '(nm) nanometer') {
        let before = $('#lengthBefore').val();
        let after = before * 1000000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mm) millimeter' && unitB === '(μm) micrometer') {
        let before = $('#lengthBefore').val();
        let after = before * 1000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mm) millimeter' && unitB === '(μm) millimeter') {
        let before = $('#lengthBefore').val();
        let after = before * 1;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mm) millimeter' && unitB === '(cm) centimeter') {
        let before = $('#lengthBefore').val();
        let after = before * 0.1;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mm) millimeter' && unitB === '(m) meter') {
        let before = $('#lengthBefore').val();
        let after = before * 0.001;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mm) millimeter' && unitB === '(km) kilometer') {
        let before = $('#lengthBefore').val();
        let after = before * 0.000001;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mm) millimeter' && unitB === '(in) inch') {
        let before = $('#lengthBefore').val();
        let after = before * 0.03937007874;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mm) millimeter' && unitB === '(ft) feet') {
        let before = $('#lengthBefore').val();
        let after = before * 0.003280839895;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mm) millimeter' && unitB === '(yd) yard') {
        let before = $('#lengthBefore').val();
        let after = before * 0.001093613298;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mm) millimeter' && unitB === '(mi) mile') {
        let before = $('#lengthBefore').val();
        let after = before * 0.0000006213688756;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mm) millimeter' && unitB === '(nm) nautical mile') {
        let before = $('#lengthBefore').val();
        let after = before * 0.00000053996;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mm) millimeter' && unitB === '(au) astronomical unit') {
        let before = $('#lengthBefore').val();
        let after = before * 149597870700000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mm) millimeter' && unitB === 'light-year') {
        let before = $('#lengthBefore').val();
        let after = before * 9460730472580800000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(cm) centimeter' && unitB === '(nm) nanometer') {
        let before = $('#lengthBefore').val();
        let after = before * 10000000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(cm) centimeter' && unitB === '(μm) micrometer') {
        let before = $('#lengthBefore').val();
        let after = before * 10000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(cm) centimeter' && unitB === '(mm) millimeter') {
        let before = $('#lengthBefore').val();
        let after = before * 10;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(cm) centimeter' && unitB === '(cm) centimeter') {
        let before = $('#lengthBefore').val();
        let after = before * 1;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(cm) centimeter' && unitB === '(m) meter') {
        let before = $('#lengthBefore').val();
        let after = before * 100;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(cm) centimeter' && unitB === '(km) kilometer') {
        let before = $('#lengthBefore').val();
        let after = before * 100000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(cm) centimeter' && unitB === '(in) inch') {
        let before = $('#lengthBefore').val();
        let after = before * 0.3937007874;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(cm) centimeter' && unitB === '(ft) feet') {
        let before = $('#lengthBefore').val();
        let after = before * 0.03280839895;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(cm) centimeter' && unitB === '(yd) yard') {
        let before = $('#lengthBefore').val();
        let after = before * 0.01093613298;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(cm) centimeter' && unitB === '(mi) mile') {
        let before = $('#lengthBefore').val();
        let after = before * 0.000006213688756;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(cm) centimeter' && unitB === '(nm) nautical mile') {
        let before = $('#lengthBefore').val();
        let after = before * 0.0000053996;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(cm) centimeter' && unitB === '(au) astronomical unit') {
        let before = $('#lengthBefore').val();
        let after = before * 14959787070000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(cm) centimeter' && unitB === 'light-year') {
        let before = $('#lengthBefore').val();
        let after = before * 946073047258080000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(m) meter' && unitB === '(nm) nanometer') {
        let before = $('#lengthBefore').val();
        let after = before * 1000000000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(m) meter' && unitB === '(μm) micrometer') {
        let before = $('#lengthBefore').val();
        let after = before * 1000000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(m) meter' && unitB === '(mm) millimeter') {
        let before = $('#lengthBefore').val();
        let after = before * 1000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(m) meter' && unitB === '(cm) centimeter') {
        let before = $('#lengthBefore').val();
        let after = before * 100;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(m) meter' && unitB === '(m) meter') {
        let before = $('#lengthBefore').val();
        let after = before * 1;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(m) meter' && unitB === '(km) kilometer') {
        let before = $('#lengthBefore').val();
        let after = before * 0.001;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(m) meter' && unitB === '(in) inch') {
        let before = $('#lengthBefore').val();
        let after = before * 39.37007874;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(m) meter' && unitB === '(ft) feet') {
        let before = $('#lengthBefore').val();
        let after = before * 3.280839895;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(m) meter' && unitB === '(yd) yard') {
        let before = $('#lengthBefore').val();
        let after = before * 1.093613298;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(m) meter' && unitB === '(mi) mile') {
        let before = $('#lengthBefore').val();
        let after = before * 0.0006213688756;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(m) meter' && unitB === '(nm) nautical mile') {
        let before = $('#lengthBefore').val();
        let after = before * 0.00053996;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(m) meter' && unitB === '(au) astronomical unit') {
        let before = $('#lengthBefore').val();
        let after = before * 149597870700;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(m) meter' && unitB === 'light-year') {
        let before = $('#lengthBefore').val();
        let after = before * 9460730472580800;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(km) kilometer' && unitB === '(nm) nanometer') {
        let before = $('#lengthBefore').val();
        let after = before * 1000000000000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(km) kilometer' && unitB === '(μm) micrometer') {
        let before = $('#lengthBefore').val();
        let after = before * 1000000000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(km) kilometer' && unitB === '(mm) millimeter') {
        let before = $('#lengthBefore').val();
        let after = before * 1000000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(km) kilometer' && unitB === '(cm) centimeter') {
        let before = $('#lengthBefore').val();
        let after = before * 100000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(km) kilometer' && unitB === '(m) meter') {
        let before = $('#lengthBefore').val();
        let after = before * 1000;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(km) kilometer' && unitB === '(km) kilometer') {
        let before = $('#lengthBefore').val();
        let after = before * 1;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(km) kilometer' && unitB === '(in) inch') {
        let before = $('#lengthBefore').val();
        let after = before * 39370.07874;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(km) kilometer' && unitB === '(ft) feet') {
        let before = $('#lengthBefore').val();
        let after = before * 3280.839895;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(km) kilometer' && unitB === '(yd) yard') {
        let before = $('#lengthBefore').val();
        let after = before * 1093.613298;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(km) kilometer' && unitB === '(mi) mile') {
        let before = $('#lengthBefore').val();
        let after = before * 0.6213688756
        $('#lengthAfter').val(after);
    }
    if (unitA === '(km) kilometer' && unitB === '(nm) nautical mile') {
        let before = $('#lengthBefore').val();
        let after = before * 0.53996;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(km) kilometer' && unitB === '(au) astronomical unit') {
        let before = $('#lengthBefore').val();
        let after = before * 149597870.7;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(km) kilometer' && unitB === 'light-year') {
        let before = $('#lengthBefore').val();
        let after = before * 9460730472580.8;
        $('#lengthAfter').val(after);
    }
    if (unitA === '(in) inch' && unitB === '(nm) nanometer') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(in) inch' && unitB === '(μm) micrometer') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(in) inch' && unitB === '(mm) millimeter') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(in) inch' && unitB === '(cm) centimeter') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(in) inch' && unitB === '(m) meter') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(in) inch' && unitB === '(km) kilometer') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(in) inch' && unitB === '(in) inch') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(in) inch' && unitB === '(ft) feet') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(in) inch' && unitB === '(yd) yard') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(in) inch' && unitB === '(mi) mile') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(in) inch' && unitB === '(nm) nautical mile') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(in) inch' && unitB === '(au) astronomical unit') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(in) inch' && unitB === 'light-year') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(ft) feet' && unitB === '(nm) nanometer') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(ft) feet' && unitB === '(μm) micrometer') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(ft) feet' && unitB === '(mm) millimeter') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(ft) feet' && unitB === '(cm) centimeter') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(ft) feet' && unitB === '(m) meter') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(ft) feet' && unitB === '(km) kilometer') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(ft) feet' && unitB === '(in) inch') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(ft) feet' && unitB === '(ft) feet') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(ft) feet' && unitB === '(yd) yard') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(ft) feet' && unitB === '(mi) mile') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(ft) feet' && unitB === '(nm) nautical mile') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(ft) feet' && unitB === '(au) astronomical unit') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(ft) feet' && unitB === 'light-year') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(yd) yard' && unitB === '(nm) nanometer') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(yd) yard' && unitB === '(μm) micrometer') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(yd) yard' && unitB === '(mm) millimeter') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(yd) yard' && unitB === '(cm) centimeter') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(yd) yard' && unitB === '(m) meter') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(yd) yard' && unitB === '(km) kilometer') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(yd) yard' && unitB === '(in) inch') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(yd) yard' && unitB === '(ft) feet') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(yd) yard' && unitB === '(yd) yard') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(yd) yard' && unitB === '(mi) mile') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(yd) yard' && unitB === '(nm) nautical mile') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(yd) yard' && unitB === '(au) astronomical unit') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(yd) yard' && unitB === 'light-year') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mi) mile' && unitB === '(nm) nanometer') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mi) mile' && unitB === '(μm) micrometer') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mi) mile' && unitB === '(mm) millimeter') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mi) mile' && unitB === '(cm) centimeter') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mi) mile' && unitB === '(m) meter') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mi) mile' && unitB === '(km) kilometer') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mi) mile' && unitB === '(in) inch') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mi) mile' && unitB === '(ft) feet') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mi) mile' && unitB === '(yd) yard') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mi) mile' && unitB === '(mi) mile') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mi) mile' && unitB === '(nm) nautical mile') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mi) mile' && unitB === '(au) astronomical unit') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(mi) mile' && unitB === 'light-year') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nautical mile' && unitB === '(nm) nanometer') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nautical mile' && unitB === '(μm) micrometer') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nautical mile' && unitB === '(mm) millimeter') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nautical mile' && unitB === '(cm) centimeter') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nautical mile' && unitB === '(m) meter') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nautical mile' && unitB === '(km) kilometer') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nautical mile' && unitB === '(in) inch') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nautical mile' && unitB === '(ft) feet') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nautical mile' && unitB === '(yd) yard') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nautical mile' && unitB === '(mi) mile') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nautical mile' && unitB === '(nm) nautical mile') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nautical mile' && unitB === '(au) astronomical unit') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(nm) nautical mile' && unitB === 'light-year') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(au) astronomical unit' && unitB === '(nm) nanometer') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(au) astronomical unit' && unitB === '(μm) micrometer') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(au) astronomical unit' && unitB === '(mm) millimeter') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(au) astronomical unit' && unitB === '(cm) centimeter') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(au) astronomical unit' && unitB === '(m) meter') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(au) astronomical unit' && unitB === '(km) kilometer') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(au) astronomical unit' && unitB === '(in) inch') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(au) astronomical unit' && unitB === '(ft) feet') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(au) astronomical unit' && unitB === '(yd) yard') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(au) astronomical unit' && unitB === '(mi) mile') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(au) astronomical unit' && unitB === '(nm) nautical mile') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(au) astronomical unit' && unitB === '(au) astronomical unit') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === '(au) astronomical unit' && unitB === 'light-year') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === 'light-year' && unitB === '(nm) nanometer') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === 'light-year' && unitB === '(μm) micrometer') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === 'light-year' && unitB === '(mm) millimeter') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === 'light-year' && unitB === '(cm) centimeter') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === 'light-year' && unitB === '(m) meter') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === 'light-year' && unitB === '(km) kilometer') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === 'light-year' && unitB === '(in) inch') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === 'light-year' && unitB === '(ft) feet') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === 'light-year' && unitB === '(yd) yard') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === 'light-year' && unitB === '(mi) mile') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === 'light-year' && unitB === '(nm) nautical mile') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === 'light-year' && unitB === '(au) astronomical unit') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
    if (unitA === 'light-year' && unitB === 'light-year') {
        let before = $('#lengthBefore').val();
        let after = before * (1/1000);
        $('#lengthAfter').val(after);
    }
}

function convertWeight(){

}
function convertArea(){

}
function convertVolume(){

}
function convertTemperature(){

}
function convertByte(){

}
function convertPressure(){

}

function begin(){
    $('.length').hide();
    $('.weight').hide();
    $('.area').hide();
    $('.volume').hide();
    $('.temperature').hide();
    $('.bytes').hide();
    $('.pressure').hide();
}


$(function() {

	window.setTimeout(function() {
		$('#accordionAll').css('opacity', '1');
	}, 500);

	$('.accordion').addClass('default');

		$('.accordion').on('click', function() {

	  	var e = $('#accordionAll > .accordion');
			if(e.hasClass('expand')){
				 e.removeClass('expand');
			 	$(this).addClass('expand');
			} else { $(this).addClass('expand'); }
		})
})

function length() {
    $('.length').show();
    $('.weight').hide();
    $('.area').hide();
    $('.volume').hide();
    $('.temperature').hide();
    $('.bytes').hide();
    $('.pressure').hide();

}
function weight() {
    $('.weight').show();
    $('.length').hide();
    $('.area').hide();
    $('.volume').hide();
    $('.temperature').hide();
    $('.bytes').hide();
    $('.pressure').hide();
}
function area() {
    $('.area').show();
    $('.length').hide();
    $('.weight').hide();
    $('.volume').hide();
    $('.temperature').hide();
    $('.bytes').hide();
    $('.pressure').hide();
}
function volume() {
    $('.volume').show();
    $('.length').hide();
    $('.weight').hide();
    $('.area').hide();
    $('.temperature').hide();
    $('.bytes').hide();
    $('.pressure').hide();
}
function temperature() {
    $('.temperature').show();
    $('.length').hide();
    $('.weight').hide();
    $('.area').hide();
    $('.volume').hide();
    $('.bytes').hide();
    $('.pressure').hide();
}
function bytes() {
    $('.bytes').show();
    $('.length').hide();
    $('.weight').hide();
    $('.area').hide();
    $('.volume').hide();
    $('.temperature').hide();
    $('.pressure').hide();
}
function pressure() {
    $('.pressure').show();
    $('.length').hide();
    $('.weight').hide();
    $('.area').hide();
    $('.volume').hide();
    $('.temperature').hide();
    $('.bytes').hide();
}








function generatePassword(length = 12) {
    $('#password').empty();
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
    var all = uppercase + lowercase + numbers + symbols;
    var password = '';
    for (var index = 0; index < length; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }
    // return password;

    $('#password').append(password);
}