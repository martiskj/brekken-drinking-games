FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
COPY ./drinking-games-server ./app

WORKDIR /app/drinking-games-api
RUN dotnet publish -c Release -o ../../artifact

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS runtime

COPY --from=build /artifact .
EXPOSE 80 443
ENTRYPOINT [ "dotnet", "drinking-games-api.dll", "--urls", "http://0.0.0.0:80" ]

