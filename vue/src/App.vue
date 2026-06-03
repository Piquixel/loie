<script>
export default {
  data() {
    return {
      name: "",
      age: 0,
      currentId: 4,
      users: [
        {
          id: 1,
          name: "John Doe",
          age: 30,
        },
        { id: 2, name: "Pierre Doe", age: 18 },
        {
          id: 3,
          name: "Henry Doe",
          age: 54,
        },
      ],
    };
  },

  beforeCreate() {
    console.log("beforeCreate");
  },

  methods: {
    addUser() {
      this.users.push({ id: this.currentId, name: this.name, age: this.age });

      this.currentId++;
      this.name = "";
      this.age = 0;
    },

    removeUser(userId) {
      this.users = this.users.filter((user) => user.id !== userId);
    },
  },
};
</script>

<template>
  <table border>
    <thead>
      <tr>
        <th>#</th>
        <th>Nom</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.age }}</td>
        <td><button @click="removeUser(user.id)">&times;</button></td>
      </tr>
    </tbody>
  </table>

  <h2>Ajouter un user</h2>

  <form @submit.prevent="addUser">
    <input v-model="name" type="text" placeholder="Prénom" />
    <input v-model="age" type="number" placeholder="Age" />
    <button type="submit">Ajouter</button>

    <div>
      {{ name }}
      {{ age }}
    </div>
  </form>
</template>

<style></style>
