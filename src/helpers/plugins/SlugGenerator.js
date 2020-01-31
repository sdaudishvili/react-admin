/* eslint-disable prettier/prettier */
const dict = {
  'ა': 'a',
  'ბ': 'b',
  'გ': 'g',
  'დ': 'd',
  'ე': 'e',
  'ვ': 'v',
  'ზ': 'z',
  'თ': 't',
  'ი': 'i',
  'კ': 'k',
  'ლ': 'l',
  'მ': 'm',
  'ნ': 'n',
  'ო': 'o',
  'პ': 'p',
  'ჟ': 'jh',
  'რ': 'r',
  'ს': 's',
  'ტ': 't',
  'უ': 'u',
  'ფ': 'f',
  'ქ': 'q',
  'ღ': 'gh',
  'ყ': 'k',
  'შ': 'sh',
  'ჩ': 'ch',
  'ც': 'c',
  'ძ': 'dz',
  'ჭ': 'tch',
  'ხ': 'kh',
  'ჯ': 'j',
  'ჰ': 'h',
  ' ': '-'
}

function slugGenerator(val) {
  let result = ''
  for(let i = 0; i < val.length; i++){
    if(dict[val[i]]){
      result += dict[val[i]]
    }else {
      result += val[i]
    }
  }
  return result
}

export default slugGenerator
