package org.example;

import io.grpc.stub.StreamObserver;
import org.example.grpc.DogVeterinaryRequest;
import org.example.grpc.DogVeterinaryResponse;

public class DogVeterinaryService{
    @Override
    public void getFeature(DogVeterinaryRequest request, StreamObserver<DogVeterinaryResponse> responseObserver) {
        responseObserver.onNext(checkFeature(request));
        responseObserver.onCompleted();
    }

    private DogVeterinaryResponse checkFeature(DogVeterinaryRequest location) {
        for (DogVeterinaryResponse response : responses) {
            if (responses == location.getLatitude()
                    && response.getLocation().getLongitude() == location.getLongitude()) {
                return response;
            }
        }

        // No feature was found, return an unnamed feature.
        return DogVeterinaryResponse.newBuilder().getMessage()
    }
}
