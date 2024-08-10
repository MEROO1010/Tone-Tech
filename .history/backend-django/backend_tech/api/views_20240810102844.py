from rest_framework.response import Response
from rest_framework.views import APIView

class TodoListView(APIView):
    def get(self, request):
        todos = Todo.objects.all()
        return Response({'todos': todos})