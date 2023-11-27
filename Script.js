const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');



textarea.focus();   // automatically put cursor and you can type 


textarea.addEventListener('keyup', (e) =>{
    createTags(e.target.value) // whatever we type 
    // press down and let go 

    if(e.key==='Enter'){
        setTimeout(() => { 
            e.target.value = ''
        }, 10)

        randomSelect()
    }
    
})


// split by , and make an array 
function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !=='').map(tag => tag.trim())
    // return based on a conditional 
    //// Filter out empty strings or strings with only whitespace
    //// Trim leading and trailing whitespace from each remaining string
    console.log(tags)

    tagsEl.innerHTML = ''  // clear it 


    tags.forEach(tag =>{ // for each 
        const tagEl  = document.createElement('span') // ceate html element 
        tagEl.classList.add('tag')
        tagEl.innerText = tag  // 
        tagsEl.appendChild(tagEl) // each of those tags elements in
    })
}


function randomSelect() {
    const times = 30 // 30 times jayega 
// shifting highlight
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
	
	if (randomTag !== undefined) {
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
	}
    }, 100);
    // stopping it
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}