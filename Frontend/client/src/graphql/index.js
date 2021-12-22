import { useQuery, useMutation, useLazyQuery } from "@apollo/client";

export const useQueryMutation = (
  { query, variables: id, estadoInscripcion, fechaIngreso, fechaEgreso },
  { mutations: { updateInscription } }
) => {
  const {
    data: dataQuery,
    loading: loadingQuery,
    error: errorQuery,
  } = useQuery(query, {
    variables: id,
    estadoInscripcion,
    fechaIngreso,
    fechaEgreso,
  });

  const [
    updateRow,
    { data: dataUpdate, loading: loadingUpdate, error: errorUpdate },
  ] = useMutation(update, {
    refetchQueries: [{ query, variables: queryVariables }],
    onCompleted: () => {
      notification.success({
        message: "Success",
        description: "Information is updated ",
      });
    },
  });

  const UpdateInscription = gql`
  mutation updateInscription($id: String!, estadoInscripcion:String!, fechaIngreso:Date!, fechaEgreso:Date!) {
  updateInscripcion(_id: $id, estadoInscripcion: $estadoInscripcion, fechaIngreso: $fechaIngreso, fechaEgreso: $fechaEgreso) {
  _id
  estadoInscripcion
  fechaIngreso
  fechaEgreso
  estudiante
  projects
  }
  }`;

  return {
    query: {
      data: dataQuery,
      loading: loadingQuery,
      error: errorQuery,
    },
    mutation: {
      update: {
        mutate: updateRow,
        data: dataUpdate,
        loading: loadingUpdate,
        error: errorUpdate,
      },
    },
    loading:
      loadingQuery ||
      loadingAdd ||
      loadingDelete ||
      loadingUpdate ||
      loadingLazyQuery,
  };
};
