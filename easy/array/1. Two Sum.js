var twoSum = function(nums, target) {
          var arrlength = nums.length;
          // console.log(arrlength);
          for (i = 0; i< arrlength; i++){
              for (j = i+1; j< arrlength; j++){
                  if(nums[i] + nums[j] === target){
                      var returnArr = [];
                      returnArr.push(i,j);
                      // console.log(returnArr);
                      return returnArr;
                    }                    
              }
          }
      };


