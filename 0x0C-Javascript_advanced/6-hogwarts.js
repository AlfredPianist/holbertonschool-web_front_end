function studentHogwarts() {
  let privateScore = 0;
  let name = null;

  function changeScoreBy(points) {
    privateScore += points;
  }

  return {
    setName: function (newName) {
      name = newName;
    },
    rewardStudent: function () {
      changeScoreBy(1);
    },
    penalizeStudent: function () {
      changeScoreBy(-1);
    },
    getScore: function () {
      return `${name}: ${privateScore}`;
    },
  };
}

const harry = new studentHogwarts();
harry.setName("Harry");
for (let idx = 0; idx < 4; idx++) {
  harry.rewardStudent();
}
console.log(harry.getScore());

const draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
for (let idx = 0; idx < 3; idx++) {
  draco.penalizeStudent();
}
console.log(draco.getScore());
