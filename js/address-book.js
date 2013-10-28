/* Kyle Peterson | Lab 5 */

$(function(){
    $('.sort-ui .btn').click(function() {
        var sortBtn = $(this);
        sortObjArray(Employees.entries, sortBtn.attr('data-sortby'));
        render(Employees.entries, $('.template'), $('.address-book'));
        var oldActive = sortBtn.siblings(".active");
        oldActive.removeClass('active');
        sortBtn.addClass('active');
    });
    sortObjArray(Employees.entries, 'last');
    render(Employees.entries, $('.template'), $('.address-book'));
}); // document ready


function render(entries, template, container) {
    var instance;
    container.empty();
    $.each(entries, function() {
        instance = template.clone();
        instance.find('.first').html(this.first);
        instance.find('.last').html(this.last);
        instance.find('.lead title').html(this.title);
        instance.find('.dept').html(this.dept);
        instance.find('.pic').attr({
            src: this.pic,
            alt: 'Picture of ' + this.first + " " + this.last
        });
        instance.removeClass('template');
        container.append(instance);
    });

}

/* sortObjArray()
    sorts an array of objects by a given property name
    the property values are compared using standard 
    operators, so this will work for string, numeric,
    boolean, or date values

    objArray        array of objects to sort
    propName        property name to sort by

    returns undefined (array is sorted in place)
*/
function sortObjArray(objArray, propName) {
    if (!objArray.sort)
        throw new Error('The objArray parameter does not seem to be an array (no sort method)');

    //sort the array supplying a custom compare function
    objArray.sort(function(a,b) {
        
        //note: this compares only one property of the objects
        //see the optional step where you can add support for 
        //a secondary sort key (i.e., sort by another property)
        //if the first property values are equal
        if (a[propName] < b[propName])
            return -1;
        else if (a[propName] === b[propName])
            return 0;
        else
            return 1;
    });
} //sortObjArray()

